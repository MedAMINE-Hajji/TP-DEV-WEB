import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Tache {
  description: string;
  statut: boolean; // true = complétée, false = non complétée
  priorite: 'haute' | 'moyenne' | 'basse';
}

@Component({
  selector: 'app-taches',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './taches.html',
  styleUrls: ['./taches.css']
})
export class TachesComponent {
  // Liste des tâches
  taches: Tache[] = [
    { description: 'Compléter le TP Angular', statut: false, priorite: 'haute' },
    { description: 'Réviser les directives structurelles', statut: false, priorite: 'haute' },
    { description: 'Lire la documentation Angular', statut: true, priorite: 'moyenne' },
    { description: 'Pratiquer avec ngFor et ngIf', statut: false, priorite: 'moyenne' },
    { description: 'Explorer les animations CSS', statut: true, priorite: 'basse' }
  ];

  // Propriétés pour ajouter une nouvelle tâche
  newDescription = '';
  newPriorite: 'haute' | 'moyenne' | 'basse' = 'moyenne';

  // Méthode pour basculer le statut d'une tâche
  toggleStatut(tache: Tache) {
    tache.statut = !tache.statut;
  }

  // Méthode pour ajouter une tâche
  addTache() {
    if (this.newDescription.trim()) {
      this.taches.push({
        description: this.newDescription,
        statut: false,
        priorite: this.newPriorite
      });
      this.newDescription = '';
      this.newPriorite = 'moyenne';
    } else {
      alert('Veuillez entrer une description');
    }
  }

  // Méthode pour supprimer une tâche
  deleteTache(index: number) {
    if (confirm('Voulez-vous vraiment supprimer cette tâche ?')) {
      this.taches.splice(index, 1);
    }
  }

  // Méthode pour obtenir la couleur selon la priorité
  getPrioriteColor(priorite: string): string {
    switch (priorite) {
      case 'haute':
        return 'red';
      case 'moyenne':
        return 'orange';
      case 'basse':
        return 'green';
      default:
        return 'gray';
    }
  }

  // Méthode pour compter les tâches complétées
  getTachesCompletees(): number {
    return this.taches.filter(t => t.statut).length;
  }

  // Méthode pour compter les tâches en cours
  getTachesEnCours(): number {
    return this.taches.filter(t => !t.statut).length;
  }
}
