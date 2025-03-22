import { Component } from '@angular/core';
import { FormVisibilityService } from '../../services/form-visibility.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private formService: FormVisibilityService) {}

  openForm() {
    console.log('🟢 Click en el botón');
    this.formService.openForm();
  }
}
