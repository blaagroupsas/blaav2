import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component';
import { StatisticsComponent } from '../../components/statistics/statistics.component';
import { ReviewsComponent } from '../../components/reviews/reviews.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormcontactComponent } from '../../components/formcontact/formcontact.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutUsComponent,
    ServicesComponent,
    StatisticsComponent,
    ReviewsComponent,
    ContactComponent,
    FooterComponent,
    CommonModule,
    ReactiveFormsModule,
    FormcontactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
