import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookService } from '../book.service';
import { Book } from '../shared/book';
import { BookViewComponent } from '../book-view/book-view.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterModule, BookViewComponent],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  selectedBook?: Book;
  books: Book[];

  constructor(private router: Router, private bookService: BookService) {
    this.books = this.bookService.books;
    console.log(this.books);
  }

  ngOnInit(): void {}

  onSelectBook(event: Event, i: number): void {
    const selectElement = event.target as HTMLInputElement;
    console.log(selectElement);
    const selectedIndex = +selectElement.value;
    console.log(selectedIndex);
    // if (selectedIndex >= 0) {
      // this.selectedBook = this.books.find(book => book.id === selectedIndex);
      this.selectedBook = this.books[i];
      console.log(this.selectedBook);
    // }
  }
  

  navigateToAddBook(): void {
    this.router.navigate(['/add-book']);
  }

  onBookDeleted(bookId: number): void {
    this.books = this.bookService.books.filter(book => book.id !== bookId);
    if (this.selectedBook?.id === bookId) {
      this.selectedBook = undefined;
    }
  }
}
