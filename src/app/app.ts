import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PersonalInfoComponent } from './components/personal-info/personal-info';
import { EducationComponent } from './components/education/education';
import { CvPreviewComponent } from './components/cv-preview/cv-preview';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , PersonalInfoComponent, 
    EducationComponent, 
    CvPreviewComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cv-builder');
}
