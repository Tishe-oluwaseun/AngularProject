import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Ensure this import path is correct

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
