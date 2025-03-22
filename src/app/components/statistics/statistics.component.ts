import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-statistics',
  standalone: true,
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  imports: [CommonModule],
})
export class StatisticsComponent implements AfterViewInit {
  statistics = [
    { value: 50, label: 'Clientes' },
    { value: 450000000, label: 'Cobertura' },
    { value: 22, label: 'Crecimiento' },
    { value: 8.03, label: 'Interacción' },
  ];

  @ViewChildren('statNumber') statNumbers!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.animateNumbers();
  }

  animateNumbers() {
    this.statNumbers.forEach((stat, index) => {
      const target = this.statistics[index].value;
      const duration = 2000; // Duración total en milisegundos
      const startTime = performance.now();

      const updateCounter = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // Asegura que no pase del 100%
        const currentValue = Math.floor(progress * target);
        stat.nativeElement.innerText = currentValue.toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
    });
  }
}
