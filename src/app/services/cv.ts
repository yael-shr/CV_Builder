import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvState = signal({
    personal: { fullName: '', email: '', phone: '', bio: '' },
    education: [] as any[]
  });

  cvData = computed(() => this.cvState());

  updatePersonal(data: any) {
    this.cvState.update(s => ({ ...s, personal: data }));
  }

  updateEducation(data: any[]) {
    this.cvState.update(s => ({ ...s, education: data }));
  }
}
