import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './articles.html',
  styleUrls: ['./articles.css']
})
export class ArticlesComponent {
  // Propriété qui contient la liste des articles (Activité 3 : avec importance)
  articles = [
    { titre: 'Laptop Asus', contenu: 'Contenu de l\'article 1', importance: 'élevée' },
    { titre: 'Laptop Gaming', contenu: 'Contenu de l\'article 2', importance: 'moyenne' },
    { titre: 'Laptop HP', contenu: 'Contenu de l\'article 3', importance: 'faible' }
  ];

  // Propriétés pour capturer les valeurs des nouveaux articles
  newTitle = '';
  newContent = '';
  newImportance = 'moyenne';

  // Méthode pour ajouter un nouvel article
  addArticle() {
    if (this.newTitle.trim() && this.newContent.trim()) {
      this.articles.push({
        titre: this.newTitle,
        contenu: this.newContent,
        importance: this.newImportance
      });
      // Réinitialisation des champs
      this.newTitle = '';
      this.newContent = '';
      this.newImportance = 'moyenne';
    } else {
      alert('Veuillez remplir tous les champs');
    }
  }
  
  // Méthode pour supprimer un article
  deleteArticle(index: number) {
    if (confirm('Voulez-vous vraiment supprimer cet article ?')) {
      this.articles.splice(index, 1);
    }
  }
}
