import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Score } from '../score/score';

interface QuizQuestion {
  question: string;
  options: string[];
  reponse: string;
  reponseUtilisateur?: string;
  estCorrecte?: boolean;
}

@Component({
  selector: 'app-game',
  imports: [CommonModule, FormsModule, Score],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game {
  // Tableau des questions
  questions: QuizQuestion[] = [
    {
      question: 'Quel est le plus grand océan du monde ?',
      options: ['Pacifique', 'Atlantique', 'Indien', 'Arctique'],
      reponse: 'Pacifique'
    },
    {
      question: "Quelle est la capitale de l'Algérie ?",
      options: ['Alger', 'Tunis', 'Tanger', 'Le Caire'],
      reponse: 'Alger'
    },
    {
      question: 'Quelle est la couleur du ciel ?',
      options: ['Bleu', 'Vert', 'Rouge', 'Jaune'],
      reponse: 'Bleu'
    },
    {
      question: 'Combien de continents y a-t-il sur Terre ?',
      options: ['5', '6', '7', '8'],
      reponse: '7'
    },
    {
      question: 'Quel est le langage de programmation utilisé par Angular ?',
      options: ['JavaScript', 'TypeScript', 'Python', 'Java'],
      reponse: 'TypeScript'
    }
  ];
  
  questionActuelleIndex = signal(0);
  score = signal(0);
  bonnesReponses = signal(0);
  mauvaisesReponses = signal(0);
  reponseSelectionnee = signal<string | null>(null);
  reponseVerrouille = signal(false);
  quizTermine = signal(false);
  
  // Computed signals
  questionActuelle = computed(() => this.questions[this.questionActuelleIndex()]);
  nombreQuestions = computed(() => this.questions.length);
  progression = computed(() => 
    ((this.questionActuelleIndex() + 1) / this.nombreQuestions()) * 100
  );
  
  // Méthode pour sélectionner une option
  onSelectOption(option: string): void {
    if (this.reponseVerrouille()) return;
    
    this.reponseSelectionnee.set(option);
    this.reponseVerrouille.set(true);
    
    const questionActuelle = this.questionActuelle();
    questionActuelle.reponseUtilisateur = option;
    
    // Vérifier si la réponse est correcte
    if (option === questionActuelle.reponse) {
      questionActuelle.estCorrecte = true;
      this.score.update(s => s + 10);
      this.bonnesReponses.update(b => b + 1);
    } else {
      questionActuelle.estCorrecte = false;
      this.score.update(s => Math.max(0, s - 5)); // Ne pas avoir de score négatif
      this.mauvaisesReponses.update(m => m + 1);
    }
  }
  
  // Méthode pour passer à la question suivante
  questionSuivante(): void {
    if (this.questionActuelleIndex() < this.questions.length - 1) {
      this.questionActuelleIndex.update(i => i + 1);
      this.reponseSelectionnee.set(null);
      this.reponseVerrouille.set(false);
    } else {
      this.terminerQuiz();
    }
  }
  
  // Méthode pour terminer le quiz
  terminerQuiz(): void {
    this.quizTermine.set(true);
  }
  
  // Méthode pour recommencer le quiz
  recommencerQuiz(): void {
    this.questionActuelleIndex.set(0);
    this.score.set(0);
    this.bonnesReponses.set(0);
    this.mauvaisesReponses.set(0);
    this.reponseSelectionnee.set(null);
    this.reponseVerrouille.set(false);
    this.quizTermine.set(false);
    
    // Réinitialiser les questions
    this.questions.forEach(q => {
      delete q.reponseUtilisateur;
      delete q.estCorrecte;
    });
  }
  
  // Méthode pour obtenir la classe CSS d'un bouton d'option
  getOptionClass(option: string): string {
    if (!this.reponseVerrouille()) {
      return this.reponseSelectionnee() === option ? 'selected' : '';
    }
    
    const questionActuelle = this.questionActuelle();
    if (option === questionActuelle.reponse) {
      return 'correct';
    }
    if (option === this.reponseSelectionnee() && option !== questionActuelle.reponse) {
      return 'incorrect';
    }
    return 'disabled';
  }
}
