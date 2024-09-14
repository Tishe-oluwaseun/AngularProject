import { Routes } from '@angular/router';
import { SignUpComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {PhotoLibraryComponent } from './photo-library/photo-library.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'photo-library', component: PhotoLibraryComponent },
  
  // { path: '**', component: NotFoundComponent } 
];