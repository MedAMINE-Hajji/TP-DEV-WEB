import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Students, Student } from './TypeStudent';

@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './etudiant.html',
  styleUrls: ['./etudiant.css']
})
export class EtudiantComponent implements OnInit {
  // Liste des étudiants
  etuds = Students;
  
  // Étudiant sélectionné (non initialisé au début)
  selectedEtudiant!: Student;

  ngOnInit(): void {
    // Initialisation si nécessaire
  }

  // Méthode appelée lors de la sélection d'un étudiant
  onSelect(e: Student): void {
    this.selectedEtudiant = e;
  }

  // Méthode pour vérifier si un étudiant est sélectionné
  isSelected(etudiant: Student): boolean {
    return this.selectedEtudiant && this.selectedEtudiant.id === etudiant.id;
  }
}
