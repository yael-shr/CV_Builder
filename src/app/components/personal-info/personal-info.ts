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