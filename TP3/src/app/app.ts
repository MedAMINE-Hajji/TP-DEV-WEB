import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bienvenue } from './components/bienvenue/bienvenue';
import { Produit } from './components/produit/produit';
import { Utilisateur } from './components/utilisateur/utilisateur';
import { Panier } from './components/panier/panier';
import { Home } from './components/home/home';
import { Game } from './components/game/game';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Bienvenue, Produit, Utilisateur, Panier, Home, Game],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TP3 - Data Binding et Interpolation');
  
  // Pour l'activité 6 & 7: Gérer le panier
  panierItems: string[] = [];
  
  gererAjoutAuPanier(nomProduit: string): void {
    this.panierItems.push(nomProduit);
    console.log(`${nomProduit} ajouté au panier.`);
  }
}
