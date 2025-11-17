import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EtudiantFormComponent } from './etudiant-form/etudiant-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EtudiantFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TP-Angular-forms');
}
