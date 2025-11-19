import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book';
import { BookFormComponent } from '../book-form/book-form';
import { BookListComponent } from '../book-list/book-list';

@Component({
  selector: 'app-book-container',
  standalone: true,
  imports: [CommonModule, BookFormComponent, BookListComponent],
  templateUrl: './book-container.html',
  styleUrl: './book-container.css'
})
export class BookContainerComponent {
  books = signal<Book[]>([
    {
      id: 1,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      publisherEmail: 'contact@cleancode.com',
      publisherPhone: '12345678',
      releaseDate: '2008-08-01',
      category: 'Informatique',
      isAvailable: true,
      stock: 15
    },
    {
      id: 2,
      title: 'Le Petit Prince',
      author: 'Antoine de Saint-Exupéry',
      publisherEmail: 'info@petitprince.fr',
      publisherPhone: '23456789',
      releaseDate: '1943-04-06',
      category: 'Roman',
      isAvailable: true,
      stock: 25
    },
    {
      id: 3,
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      publisherEmail: 'publisher@sapiens.com',
      publisherPhone: '34567890',
      releaseDate: '2011-01-01',
      category: 'Histoire',
      isAvailable: false,
      stock: 0
    },
    {
      id: 4,
      title: 'Une brève histoire du temps',
      author: 'Stephen Hawking',
      publisherEmail: 'science@hawking.uk',
      publisherPhone: '45678901',
      releaseDate: '1988-03-01',
      category: 'Science',
      isAvailable: true,
      stock: 8
    }
  ]);

  categories = ['Roman', 'Science', 'Histoire', 'Informatique', 'Art', 'Autres'];
  
  selectedBook = signal<Book | null>(null);

  addBook(book: Book) {
    const newId = Math.max(0, ...this.books().map(b => b.id)) + 1;
    const newBook = { ...book, id: newId };
    this.books.update(books => [...books, newBook]);
  }

  updateBook(book: Book) {
    this.books.update(books => 
      books.map(b => b.id === book.id ? book : b)
    );
    this.selectedBook.set(null);
  }

  deleteBook(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce livre ?')) {
      this.books.update(books => books.filter(b => b.id !== id));
    }
  }

  editBook(book: Book) {
    this.selectedBook.set({ ...book });
  }

  cancelEdit() {
    this.selectedBook.set(null);
  }
}
