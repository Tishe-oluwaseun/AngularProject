// app.routes.ts
import { Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { NotFoundComponent } from './not-found/not-found.component'; 

export const routes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },  
  { path: 'cars', component: CarListComponent },         
  { path: 'car/:id', component: CarDetailComponent },   
  { path: '**', component: NotFoundComponent }           
];
