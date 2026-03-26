/**
 * רכיב פרטים אישיים - מימוש באמצעות Template Driven Forms.
 * נימוק לבחירה: מדובר בטופס פשוט יחסית עם מבנה קבוע ושדות בסיסיים.
 * שיטה זו מאפשרת הקמה מהירה של הטופס ללא צורך בניהול אובייקטים מורכבים ב-Component,
 * ומתאימה מאוד למקרים בהם אין לוגיקה דינאמית מורכבת של הוספת שדות.
 */

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CvService } from '../../services/cv';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './personal-info.html'
})
export class PersonalInfoComponent {
  cvService = inject(CvService);

  onUpdate(formValues: any) {
    
    this.cvService.updatePersonal(formValues);
  }
}