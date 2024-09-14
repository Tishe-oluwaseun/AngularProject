import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { PhotoLibraryComponent } from './photo-library/photo-library.component';
import { EventDetailComponent } from './event-detail/event-detail.component'; 
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'photo-library', component: PhotoLibraryComponent, canActivate: [AuthGuard] },
  { path: 'event-detail/:id', component: EventDetailComponent, canActivate: [AuthGuard] }, 
  { path: '**', component: NotFoundComponent },
]
