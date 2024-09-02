import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuth = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object // Inject PLATFORM_ID to check the environment
  ) {
    this.autoSignIn();
  }

  autoSignIn() {
    // Ensure localStorage is only accessed in the browser environment
    if (isPlatformBrowser(this.platformId) && localStorage.getItem('email')) {
      this.isAuth.next(true);
      this.router.navigate(['/dashboard']);
    }
  }

  signIn(email: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('email', email);
      this.isAuth.next(true);
      this.router.navigate(['/dashboard']);
    }
  }

  signOut() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('email');
      this.isAuth.next(false);
      this.router.navigate(['/auth']);
    }
  }
}
