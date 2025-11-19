import { Component } from '@angular/core';
import { BookContainerComponent } from './components/book-container/book-container';

@Component({
  selector: 'app-root',
  imports: [BookContainerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
