import { Component, inject } from '@angular/core';
import { CvService } from '../../services/cv';

@Component({
  selector: 'app-cv-preview',
  standalone: true,
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
          <strong>{{ edu.school }}</strong> 
          <span class="status-tag">({{ edu.status }})</span>
          
          @if (edu.degree) {
            <div>{{ edu.degree }}</div>
          }
          
          @if (edu.status === 'סיימתי' && edu.endDate) {
            <small>תאריך סיום: {{ edu.endDate }}</small>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .bio-text { font-style: italic; color: #555; margin-top: 10px; }
    .edu-entry { margin-bottom: 15px; }
    .status-tag { font-size: 0.8em; color: #7f8c8d; margin-right: 5px; }
  `]
})
export class CvPreviewComponent {
  cv = inject(CvService).cvData;
}