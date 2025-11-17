import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css']
})
export class WelcomeComponent {
  // Propriété indiquant si l'utilisateur est connecté
  isLoggedIn: boolean = false;
  
  // Propriété pour le nom d'utilisateur
  username: string = '';
  
  // Nom attendu pour la validation (Défi)
  expectedName: string = 'Mohamed';

  // Méthode pour basculer l'état de connexion
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
  
  // Méthode pour se connecter avec validation (Défi)
  login() {
    if (this.username.trim() === this.expectedName) {
      this.isLoggedIn = true;
    } else {
      alert('Nom d\'utilisateur incorrect !');
    }
  }
  
  // Méthode pour se déconnecter
  logout() {
    this.isLoggedIn = false;
    this.username = '';
  }
}
