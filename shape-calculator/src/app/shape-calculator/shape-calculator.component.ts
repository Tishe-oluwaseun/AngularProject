import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-shape-calculator',
  standalone: true,
  templateUrl: './shape-calculator.component.html',
  styleUrl: './shape-calculator.component.css',
  imports: [CommonModule, FormsModule] 
})
export class ShapeCalculatorComponent {
  selectedShape: string = '';
  radius: number = 0;
  side: number = 0;
  length: number = 0;
  width: number = 0;
  base: number = 0;
  height: number = 0;
  area: number | null = null;

  onShapeChange() {
    this.area = 0; 
    this.radius = 0;
    this.side = 0;
    this.length = 0;
    this.width = 0;
    this.base = 0;
    this.height = 0;
  }

  calculateArea() {
    switch (this.selectedShape) {
      case 'circle':
        this.area = Math.PI * Math.pow(this.radius, 2);
        break;
      case 'square':
        this.area = Math.pow(this.side, 2);
        break;
      case 'rectangle':
        this.area = this.length * this.width;
        break;
      case 'triangle':
        this.area = 0.5 * this.base * this.height;
        break;
      default:
        this.area = null;
    }
  }
}
