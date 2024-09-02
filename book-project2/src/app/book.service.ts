import { Injectable } from '@angular/core';
import { Book } from './shared/book'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  
 
  books: Book[] = [
    {
      id: 1,
      bookName: 'Python for dummies',
      author: 'Ben Alex Carter',
      publishedDate: '2020-01-01',
      publishCompany: 'Blue book Company',
      isbn: '1234567890',
      numberOfPages: 200,
      bookFormat: 'Hardcover',
      bookEdition: 'First Edition',
      about: 'This is the first book.',
      accessMode: 'Online',
      award: 'Peace Award',
      copyrightHolder: 'Nolan Holding',
      copyrightNotice: 'All rights reserved.',
      copyrightYear: '2023'
    },
    {
      id: 2,
      bookName: 'Sign Language for the hearing',
      author: 'Steve Jerry',
      publishedDate: '2021-01-01',
      publishCompany: 'EarLoses company',
      isbn: '0987654321',
      numberOfPages: 150,
      bookFormat: 'Paperback',
      bookEdition: 'Second Edition',
      about: 'This is a book to learn Sign Language.',
      accessMode: 'Online',
      award: 'Bestseller 2012',
      copyrightHolder: 'HearingCommunity',
      copyrightNotice: 'All rights reserved.',
      copyrightYear: '2021'
    },
    {
      id: 3,
      bookName: 'Advanced JavaScript',
      author: 'Alex Johnson',
      publishedDate: '2021-03-20',
      publishCompany: 'Web Dev Publishing',
      isbn: '456-7890123456',
      numberOfPages: 400,
      bookFormat: 'Hardcover',
      bookEdition: 'Third',
      about: 'A complete guide to JavaScript advanced topics.',
      accessMode: 'Online',
      award: 'Noble Prize',
      copyrightHolder: 'Alex Johnson',
      copyrightNotice: 'All rights reserved.',
      copyrightYear: '2021',
    },
    {
      id: 4,
      bookName: 'Web Development with Angular',
      author: 'Emily Davis',
      publishedDate: '2018-11-11',
      publishCompany: 'Full Stack Publishing',
      isbn: '234-5678901234',
      numberOfPages: 350,
      bookFormat: 'Paperback',
      bookEdition: 'First',
      about: 'Learn to build web applications using Angular.',
      accessMode: 'Offline',
      award: 'Web Dev Award 2018',
      copyrightHolder: 'Emily Davis',
      copyrightNotice: 'All rights reserved.',
      copyrightYear: '2018',
    },
    {
      id: 5,
      bookName: 'Mastering Angular',
      author: 'Michael Brown',
      publishedDate: '2017-09-07',
      publishCompany: 'Expert Publishing',
      isbn: '012-3456789012',
      numberOfPages: 450,
      bookFormat: 'E-book',
      bookEdition: 'Second',
      about: 'Master the Angular framework.',
      accessMode: 'Online',
      award: 'Best Angular Book 2017',
      copyrightHolder: 'Michael Brown',
      copyrightNotice: 'All rights reserved.',
      copyrightYear: '2017',
    }
  ];
}
