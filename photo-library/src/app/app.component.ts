import { Component } from '@angular/core';
import {  RouterModule, RouterOutlet} from '@angular/router';
import { SignUpComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PhotoLibraryComponent } from './photo-library/photo-library.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [RouterModule, SignUpComponent, LoginComponent, PhotoLibraryComponent]
})
export class AppComponent {}
