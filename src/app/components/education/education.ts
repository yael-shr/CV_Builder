/**
 * רכיב השכלה - מימוש באמצעות Reactive Forms.
 * נימוק לבחירה: השכלה היא מבנה נתונים מורכב ודינאמי (רשימת מוסדות ורשימת קורסים פנימית).
 * שיטת ה-Reactive מאפשרת שליטה מלאה על ולידציות מורכבות, ניהול מערכים דינאמיים (FormArray)
 * ושינוי מצב שדות בזמן אמת בצורה נוחה ובטוחה.
 */
import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormArray, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CvService } from '../../services/cv';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './education.html'
})
export class EducationComponent implements OnInit {
  private fb = inject(FormBuilder);
  private cvService = inject(CvService);

  eduForm = this.fb.group({
    items: this.fb.array([], Validators.required)
  });

  get items() { return this.eduForm.get('items') as FormArray; }

  ngOnInit() {
    if (this.items.length === 0) this.addEducation();
    this.eduForm.valueChanges.subscribe(val => {
      
        this.cvService.updateEducation(val.items || []);
      
    });
  }

  addEducation() {
    const group = this.fb.group({
      school: ['', Validators.required],
      degreeType: ['', Validators.required],
      fieldOfStudy: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required], // יתעדכן דינאמית
      status: ['סיימתי', Validators.required],
      gradeAverage: [null, [Validators.required, Validators.min(0), Validators.max(100)]], // טווח 0-100
      hasHonors: [false],
      description: ['', Validators.required],
      courses: this.fb.array([], Validators.required)
    }, { validators: this.dateRangeValidator });

    // האזנה לשינויי סטטוס לעדכון ולידציית תאריך סיום
    group.get('status')?.valueChanges.subscribe(status => {
      const endDateControl = group.get('endDate');
      if (status === 'לומדת כרגע') {
        endDateControl?.clearValidators();
      } else {
        endDateControl?.setValidators([Validators.required]);
      }
      endDateControl?.updateValueAndValidity();
    });

    this.items.push(group);
    this.addCourse(this.items.length - 1);
  }

  dateRangeValidator(control: AbstractControl): ValidationErrors | null {
    const start = control.get('startDate')?.value;
    const end = control.get('endDate')?.value;
    const status = control.get('status')?.value;
    
    if (status === 'לומדת כרגע') return null;
    if (start && end && new Date(start) >= new Date(end)) {
      return { dateInvalid: true };
    }
    return null;
  }

  getCourses(eduIndex: number) { return this.items.at(eduIndex).get('courses') as FormArray; }
  addCourse(eduIndex: number) { this.getCourses(eduIndex).push(this.fb.control('', Validators.required)); }
  
  removeCourse(eduIndex: number, courseIndex: number) {
    const courses = this.getCourses(eduIndex);
    if (courses.length > 1) courses.removeAt(courseIndex);
  }

  removeEducation(index: number) { if (this.items.length > 1) this.items.removeAt(index); }
}