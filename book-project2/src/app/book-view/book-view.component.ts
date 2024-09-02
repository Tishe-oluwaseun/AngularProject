import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../shared/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-view',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
  @Input() book?: Book;
  @Output() bookDeleted = new EventEmitter<number>();
  
  editBookForm!: FormGroup;
  isEditing = false;

  constructor(private fb: FormBuilder, private bookService: BookService, private router: Router,) {}

  ngOnInit(): void {
    this.initializeForm();

  }

  initializeForm(): void {
    this.editBookForm = this.fb.group({
      bookName: ['', Validators.required],
      author: ['', Validators.required],
      publishedDate: ['', Validators.required],
      publishCompany: ['', Validators.required],
      isbn: ['', Validators.required],
      numberOfPages: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      bookFormat: ['', Validators.required],
      bookEdition: ['', Validators.required],
      about: ['', Validators.required],
      accessMode: ['', Validators.required],
      award: [''],
      copyrightHolder: ['', Validators.required],
      copyrightNotice: ['', Validators.required],
      copyrightYear: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]]
    });

    if (this.book) {
      this.editBookForm.patchValue(this.book);
    }
  }

  navigateToAddBook(): void {
    this.router.navigate(['/add-book']);
  }

  enableEdit(): void {
    this.isEditing = true;
    if (this.book) {
      this.editBookForm.patchValue(this.book);
    }
  }

  cancelEdit(): void {
    this.isEditing = false;
    if (this.book) {
      this.editBookForm.patchValue(this.book);
    }
  }

  onUpdateBook(): void {
    if (this.editBookForm.valid && this.book) {
      Object.assign(this.book, this.editBookForm.value);
      this.bookService.books = this.bookService.books.map(b =>
        b.id === this.book!.id ? this.book! : b
      );
      this.isEditing = false;
    }
  }

  deleteBook(bookId: number): void {
    this.bookService.books = this.bookService.books.filter(book => book.id !== bookId);
    this.bookDeleted.emit(bookId);  
  }
}
