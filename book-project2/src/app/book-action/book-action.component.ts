import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BookService } from '../book.service';
import { NoEDirective } from '../Noe';

@Component({
  selector: 'app-book-action',
  standalone: true,
  templateUrl: './book-action.component.html',
  styleUrls: ['./book-action.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, NoEDirective]
})
export class BookActionComponent implements OnInit {
  bookForm!: FormGroup;
  


  constructor(private fb: FormBuilder, private router: Router, private bookservice: BookService) {}

  ngOnInit(): void {
    this.bookForm = this.fb.group({
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
      award: ['', Validators.required],
      copyrightHolder: ['', Validators.required],
      copyrightNotice: ['', Validators.required],
      copyrightYear: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]]
    });
  }
  

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const newBook = this.bookForm.value;
      this.bookservice.books.push(newBook);
      console.log(this.bookservice.books)
      this.router.navigate(['/books']);
      console.log('Updated Book Data:', newBook); 
    }else {
      this.markFormGroupTouched(this.bookForm);
    }
  }
}
