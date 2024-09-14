import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<any>;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user$ = this.afAuth.authState;
  }

  // Sign up a new user
  signUp(email: string, password: string): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['/photo-library']); // Redirect after signup
      })
      .catch((error) => {
        console.error('Sign Up Error: ', error);
        throw error;
      });
  }

  // Log in an existing user
  login(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['/photo-library']); // Redirect after login
      })
      .catch((error) => {
        console.error('Login Error: ', error);
        throw error;
      });
  }

  // Log out the user
  logout(): Promise<void> {
    return this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']); // Redirect to login page
    });
  }

  // Check if the user is logged in
  isLoggedIn(): Observable<boolean> {
    return this.user$.pipe(map(user => !!user));
  }

  // Automatically redirect based on auth state
  checkAuthState(): void {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.router.navigate(['/photo-library']);
      } else {
        this.router.navigate(['/login']); // Redirect to login if not authenticated
      }
    });
  }
}
