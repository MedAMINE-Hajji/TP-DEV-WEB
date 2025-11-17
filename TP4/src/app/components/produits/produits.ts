import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Produit {
  nom: string;
  stock: number;
}

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './produits.html',
  styleUrls: ['./produits.css']
})
export class ProduitsComponent {
  // Liste des produits avec leur niveau de stock
  produits: Produit[] = [
    { nom: 'Laptop Dell', stock: 75 },
    { nom: 'Souris Logitech', stock: 35 },
    { nom: 'Clavier Mécanique', stock: 15 },
    { nom: 'Écran Samsung', stock: 5 },
    { nom: 'Casque Audio', stock: 120 },
    { nom: 'Webcam HD', stock: 28 }
  ];

  // Propriétés pour ajouter un nouveau produit
  newNom = '';
  newStock = 0;

  // Méthode pour obtenir la couleur en fonction du stock
  getStockColor(stock: number): string {
    if (stock > 50) {
      return 'green';
    } else if (stock >= 20 && stock <= 50) {
      return 'orange';
    } else {
      return 'red';
    }
  }

  // Méthode pour obtenir le message de statut
  getStockStatus(stock: number): string {
    if (stock > 50) {
      return '✅ Stock élevé';
    } else if (stock >= 20 && stock <= 50) {
      return '⚠️ Stock moyen';
    } else {
      return '❌ Stock faible';
    }
  }

  // Méthode pour ajouter un produit
  addProduit() {
    if (this.newNom.trim() && this.newStock >= 0) {
      this.produits.push({
        nom: this.newNom,
        stock: this.newStock
      });
      this.newNom = '';
      this.newStock = 0;
    } else {
      alert('Veuillez entrer un nom valide et un stock positif');
    }
  }

  // Méthode pour augmenter le stock
  incrementStock(produit: Produit) {
    produit.stock += 10;
  }

  // Méthode pour diminuer le stock
  decrementStock(produit: Produit) {
    if (produit.stock >= 10) {
      produit.stock -= 10;
    } else {
      produit.stock = 0;
    }
  }

  // Méthode pour supprimer un produit
  deleteProduit(index: number) {
    if (confirm('Voulez-vous vraiment supprimer ce produit ?')) {
      this.produits.splice(index, 1);
    }
  }
}
