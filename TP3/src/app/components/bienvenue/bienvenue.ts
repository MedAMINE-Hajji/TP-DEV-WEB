import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produit } from '../produit/produit';
import { Panier } from '../panier/panier';
import { Utilisateur } from '../utilisateur/utilisateur';

@Component({
  selector: 'app-bienvenue',
  imports: [CommonModule, Produit, Panier, Utilisateur],
  templateUrl: './bienvenue.html',
  styleUrl: './bienvenue.css',
})
export class Bienvenue {
  // Activité 1: Interpolation
  titre: string = 'Activités Pratiques (1-8)';
  message: string = 'Bienvenue sur notre site ! Découvrez nos produits incroyables';
  
  // Pour gérer le panier (Activité 6)
  panierItems: string[] = [];
  
  // Méthode pour gérer l'ajout au panier
  gererAjoutAuPanier(nomProduit: string): void {
    this.panierItems.push(nomProduit);
    console.log(`${nomProduit} ajouté au panier`);
  }
}
