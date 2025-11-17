import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-utilisateur',
  imports: [FormsModule],
  templateUrl: './utilisateur.html',
  styleUrl: './utilisateur.css',
})
export class Utilisateur {
  // Activité 4: Two-way data binding avec ngModel
  nom: string = '';
  email: string = '';
  age: number = 0;
}
