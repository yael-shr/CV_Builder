import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormArray, Validators } from '@angular/forms';
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
    items: this.fb.array([])
  });

  get items() { return this.eduForm.get('items') as FormArray; }

  ngOnInit() {
    this.addEducation(); // הוספת פריט ראשון כברירת מחדל
    this.eduForm.valueChanges.subscribe(val => {
      this.cvService.updateEducation(val.items || []);
    });
  }

  addEducation() {
    const group = this.fb.group({
      school: ['', Validators.required],
      degree: ['', Validators.required],
      status: ['סיימתי'],
      endDate: ['']
    });
    this.items.push(group);
  }

  removeEducation(index: number) {
    this.items.removeAt(index);
  }
}