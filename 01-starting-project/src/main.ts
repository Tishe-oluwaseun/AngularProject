import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

import { FormsModule } from '@angular/forms';

bootstrapApplication(FormsModule).catch((err) => console.error(err));

bootstrapApplication(AppComponent).catch((err) => console.error(err));


