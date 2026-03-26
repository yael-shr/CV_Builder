import { Component, inject } from '@angular/core';
import { CvService } from '../../services/cv';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv-preview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="preview-box">
      <h2>{{ cv().personal.fullName || 'שם המועמד' }}</h2>
      <p>{{ cv().personal.email }} | {{ cv().personal.phone }}</p>
      @if (cv().personal.bio) {
        <p class="bio-text">{{ cv().personal.bio }}</p>
      }
      <hr>

      <h3>השכלה</h3>
      @for (edu of cv().education; track $index) {
        <div class="edu-entry">
          <div class="edu-header">
            <strong>{{ edu.school }}</strong>
            <span class="degree-badge">{{ edu.degreeType }}</span>
            @if (edu.hasHonors) {
              <span class="honors-tag">⭐ בהצטיינות</span>
            }
          </div>
          
          <div class="field-text">{{ edu.fieldOfStudy }}</div>
          
          <div class="date-and-grade">
            <span>{{ edu.startDate | date:'MM/yyyy' }} - {{ edu.endDate | date:'MM/yyyy' }}</span>
            @if (edu.gradeAverage) {
              <span class="grade">| ממוצע: {{ edu.gradeAverage }}</span>
            }
          </div>

          <p class="edu-description">{{ edu.description }}</p>

          @if (edu.courses && edu.courses.length > 0) {
            <div class="courses-preview">
              <small>קורסים מרכזיים:</small>
              <div class="tags-container">
                @for (course of edu.courses; track $index) {
                  <span class="course-tag">{{ course }}</span>
                }
              </div>
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .preview-box { background: white; padding: 40px; border: 1px solid #eee; }
    .edu-entry { margin-bottom: 25px; border-right: 3px solid #3498db; padding-right: 15px; }
    .edu-header { display: flex; align-items: center; gap: 10px; margin-bottom: 5px; }
    .degree-badge { background: #ebf5fb; color: #2980b9; padding: 2px 8px; border-radius: 12px; font-size: 0.8em; }
    .honors-tag { color: #f1c40f; font-weight: bold; font-size: 0.9em; }
    .field-text { font-weight: 500; color: #34495e; }
    .date-and-grade { font-size: 0.85em; color: #7f8c8d; margin: 4px 0; }
    .edu-description { font-size: 0.9em; color: #555; line-height: 1.4; }
    .tags-container { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px; }
    .course-tag { background: #f2f2f2; padding: 2px 10px; border-radius: 4px; font-size: 0.8em; color: #666; }
  `]
})
export class CvPreviewComponent {
  cv = inject(CvService).cvData;
}