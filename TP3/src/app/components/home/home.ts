import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router: Router) {}
  
  commencerQuiz(): void {
    // Navigation vers le composant Game sera implémentée plus tard avec le routing
    console.log('Démarrage du quiz...');
  }
}
