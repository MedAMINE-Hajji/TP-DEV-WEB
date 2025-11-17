import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produit',
  imports: [CommonModule],
  templateUrl: './produit.html',
  styleUrl: './produit.css',
})
export class Produit {
  // Activité 7: @Input pour recevoir le nom du produit du parent
  @Input() nomProduit: string = 'Produit Par Défaut';
  
  // Activité 2: Property binding pour l'image
  imageUrl: string = 'assets/images/product.jpg';
  
  // Activité 5: Property binding pour le stock
  enStock: boolean = true;
  
  // Activité 8: Pipe pour le prix
  prix: number = 299.99;
  
  // Activité 6: @Output pour émettre l'événement d'ajout au panier
  @Output() ajouterAuPanier = new EventEmitter<string>();
  
  // Activité 3: Event binding
  afficherAlerte(): void {
    alert('Produit ajouté au panier');
  }
  
  // Activité 5: Méthode pour basculer le stock
  toggleStock(): void {
    this.enStock = !this.enStock;
  }
  
  // Activité 6: Méthode pour ajouter au panier
  ajouterProduit(): void {
    this.ajouterAuPanier.emit(this.nomProduit);
  }
}
