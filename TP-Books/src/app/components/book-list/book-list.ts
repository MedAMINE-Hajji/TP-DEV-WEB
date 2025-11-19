import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css'
})
export class BookListComponent {
  @Input() books: Book[] = [];
  @Output() deleteBook = new EventEmitter<number>();
  @Output() editBook = new EventEmitter<Book>();

  searchTerm = signal('');
  sortBy = signal<'category' | 'available' | 'none'>('none');

  get filteredAndSortedBooks(): Book[] {
    let result = [...this.books];

    // Filtre par recherche
    const search = this.searchTerm().toLowerCase();
    if (search) {
      result = result.filter(book =>
        book.title.toLowerCase().includes(search) ||
        book.author.toLowerCase().includes(search) ||
        book.category.toLowerCase().includes(search)
      );
    }

    // Tri
    const sort = this.sortBy();
    if (sort === 'category') {
      result.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sort === 'available') {
      result.sort((a, b) => (b.isAvailable ? 1 : 0) - (a.isAvailable ? 1 : 0));
    }

    return result;
  }

  get totalBooks(): number {
    return this.books.length;
  }

  get availableBooks(): number {
    return this.books.filter(b => b.isAvailable).length;
  }

  onDelete(id: number) {
    this.deleteBook.emit(id);
  }

  onEdit(book: Book) {
    this.editBook.emit(book);
  }

  updateSearch(value: string) {
    this.searchTerm.set(value);
  }

  updateSort(value: string) {
    this.sortBy.set(value as 'category' | 'available' | 'none');
  }
}
