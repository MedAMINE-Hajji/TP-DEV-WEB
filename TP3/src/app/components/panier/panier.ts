import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panier',
  imports: [CommonModule],
  templateUrl: './panier.html',
  styleUrl: './panier.css',
})
export class Panier {
  // Activité 6: @Input pour recevoir la liste des items du parent
  @Input() items: string[] = [];
}
