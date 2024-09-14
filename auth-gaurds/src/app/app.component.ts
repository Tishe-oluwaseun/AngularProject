import { Component, inject } from '@angular/core';
import { RouterLink,  RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Correct property name is `styleUrls`
})
export class AppComponent {
  http = inject(HttpClient);

  logout(): void {
    console.log('logout');
  }
}
