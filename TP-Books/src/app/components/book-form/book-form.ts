import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css'
})
export class BookFormComponent implements OnChanges {
  @Input() categories: string[] = [];
  @Input() selectedBook: Book | null = null;
  @Output() bookSubmit = new EventEmitter<Book>();
  @Output() cancelEdit = new EventEmitter<void>();
  
  @ViewChild('bookForm') bookForm!: NgForm;

  book: Book = new Book();
  isEditMode = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedBook'] && this.selectedBook) {
      this.book = { ...this.selectedBook };
      this.isEditMode = true;
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Validation: titre ne doit pas être composé uniquement de chiffres
      if (/^\d+$/.test(this.book.title)) {
        alert('Le titre ne peut pas être composé uniquement de chiffres !');
        return;
      }

      this.bookSubmit.emit({ ...this.book });
      this.resetForm(form);
    }
  }

  resetForm(form: NgForm) {
    this.book = new Book();
    this.isEditMode = false;
    form.resetForm();
  }

  onCancel(form: NgForm) {
    this.resetForm(form);
    this.cancelEdit.emit();
  }
}
