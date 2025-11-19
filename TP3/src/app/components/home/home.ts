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
    this.router.navigate(['/quiz']);
  }
  
  allerAuxActivites(): void {
    this.router.navigate(['/activites']);
  }
}
