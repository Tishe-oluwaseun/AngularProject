import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { AuthService } from '../auth.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'], // Correct property name is `styleUrls`
})
export class DashboardComponent {
  email: string | null = null;

  constructor(private authService: AuthService, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.email = localStorage.getItem('email'); // Check if in browser before accessing localStorage
    }
  }

  signOut() {
    this.authService.signOut();
  }
}
