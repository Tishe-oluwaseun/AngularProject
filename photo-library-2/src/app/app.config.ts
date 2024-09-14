import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"photo-library-2","appId":"1:517492012960:web:6d6dd4e538d3340eb856c5","storageBucket":"photo-library-2.appspot.com","apiKey":"AIzaSyD_-mvl0fTcCa7JhtTkgZV-Ofqv_LUpYS8","authDomain":"photo-library-2.firebaseapp.com","messagingSenderId":"517492012960"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
