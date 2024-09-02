// car.service.ts
import { Injectable } from '@angular/core';
import { Car } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars: Car[] = [
    { id: 1, name: 'Tesla Model X 100D AWD 4dr SUV', year: 2018, image: '2018 Tesla Model X 100D AWD 4dr SUV.PNG', company: 'Tesla', color: 'White', plateNumber: 'XYZ-123', interiorColor: 'Black', taxRate: 0.10 },
    { id: 2, name: 'Porsche Macan S', year: 2021, image: '2021 Porsche Macan S.PNG', company: 'Porsche', color: 'Black', plateNumber: 'ABC-456', interiorColor: 'Red', taxRate: 0.12 },
    { id: 3, name: 'Bentley Flying Spur V8', year: 2022, image: '2022 Bentley Flying Spur V8.PNG', company: 'Bentley', color: 'Blue', plateNumber: 'DEF-789', interiorColor: 'Beige', taxRate: 0.15 },
    { id: 4, name: 'Volvo XC90 Plug-In Hybrid Plus', year: 2025, image: '2025 Volvo XC90 Plug-In Hybrid Plus.PNG', company: 'Volvo', color: 'Silver', plateNumber: 'GHI-012', interiorColor: 'Gray', taxRate: 0.08 }
  ];

  getCars(): Car[] {
    return this.cars;
  }

  getCarById(id: number): Car | undefined {
    return this.cars.find(car => car.id === id);
  }
}
