import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  email: string;
  password: string;

  constructor(private afAuth: AngularFireAuth) {}

  onSubmit() {
    this.afAuth.createUserWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        // Handle successful sign up
      })
      .catch((error) => {
        // Handle error
      });
  }
}