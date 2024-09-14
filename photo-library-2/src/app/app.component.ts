
import { Component, OnInit } from '@angular/core';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Auth } from '@angular/fire/auth'; // Firebase Auth

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  title = 'photo-library-2';
 
}
