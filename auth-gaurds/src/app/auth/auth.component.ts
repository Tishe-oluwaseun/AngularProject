import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'], // Correct property name is `styleUrls`
})
export class AuthComponent {
  signInForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]), // Added email validator
  });

  constructor(private authService: AuthService) {}

  signIn() {
    if (this.signInForm.valid) {
      this.authService.signIn(this.signInForm.value.email as string);
    }
  }
}
