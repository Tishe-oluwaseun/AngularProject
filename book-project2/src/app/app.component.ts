import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookViewComponent } from './book-view/book-view.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [BookListComponent, RouterModule, BookViewComponent]
})
export class AppComponent {
  selectedBook: any;

  constructor(private router: Router) {}

  onSelectBook(book: any) {
    this.selectedBook = book;
  }

  navigateToAddBook(): void {
    this.router.navigate(['/add-book']);
  }
}
