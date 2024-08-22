import { Component } from '@angular/core';
import { ShapeCalculatorComponent } from './shape-calculator/shape-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-shape-calculator></app-shape-calculator>`,
  imports: [ShapeCalculatorComponent]
})
export class AppComponent {
  title = 'shape-calculator';
}
