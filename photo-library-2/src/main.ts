import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { AppComponent } from './app/app.component'; 
import { routes } from './app/app.routes';
import { environment } from './environments/environment';

import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideHttpClient } from '@angular/common/http';




if (environment.production) {
  enableProdMode();
}


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), 
    provideFirebaseApp(() => initializeApp(environment)), 
    provideAuth(() => getAuth()), 
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    provideHttpClient(),
  ]
}).catch(err => console.error('Error bootstrapping the application', err));

