import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormVisibilityService } from '../../services/form-visibility.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-formcontact',
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './formcontact.component.html',
  styleUrl: './formcontact.component.scss',
})
export class FormcontactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  messageStatus: 'success' | 'error' | null = null;
  isFormOpen = false;
  private subscription: Subscription = new Subscription();
  constructor(
    private fb: FormBuilder,
    private formService: FormVisibilityService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  ngOnInit() {
    this.subscription = this.formService.isFormOpen$.subscribe((isOpen) => {
      console.log('📩 Estado del formulario:', isOpen);
      this.isFormOpen = isOpen;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    this.messageStatus = null;

    // Simula el envío de datos (reemplázalo con una petición HTTP real)
    setTimeout(() => {
      this.isSubmitting = false;
      if (Math.random() > 0.2) {
        // Simulación de éxito (80% de éxito)
        this.messageStatus = 'success';
        this.contactForm.reset();
      } else {
        this.messageStatus = 'error';
      }
    }, 2000);
  }

  closeForm() {
    console.log('🔴 Cerrando formulario');
    this.formService.closeForm();
  }
}
