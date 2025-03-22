import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormVisibilityService {
  private formVisibility = new BehaviorSubject<boolean>(false);
  isFormOpen$ = this.formVisibility.asObservable();

  openForm() {
    console.log('🟢 Formulario abierto');
    this.formVisibility.next(true);
  }

  closeForm() {
    console.log('🔴 Formulario cerrado');
    this.formVisibility.next(false);
  }
}
