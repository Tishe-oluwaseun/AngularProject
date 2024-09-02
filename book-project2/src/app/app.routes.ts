// app.routes.ts
import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookActionComponent } from './book-action/book-action.component';
import { NotFoundComponent } from './not-found/not-found.component';


export const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'add-book', component: BookActionComponent },
  { path: 'books', component: BookListComponent },
  { path: '**', component: NotFoundComponent } 
  
];
