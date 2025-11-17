# TP4 - Directives Structurelles et Attributs Angular

## 📚 Description

Ce projet implémente tous les exercices du TP4 sur les directives structurelles et attributs Angular.

## 🎯 Objectifs Pédagogiques

- Comprendre et utiliser **\*ngIf** pour l'affichage conditionnel
- Maîtriser **\*ngFor** pour l'itération sur des listes
- Appliquer **[ngClass]** pour des classes CSS conditionnelles
- Utiliser **[ngStyle]** pour des styles dynamiques
- Combiner toutes les directives dans une application complète

## 📂 Structure du Projet

### Composants Implémentés

#### 1. **Welcome Component** (Activité 1)

- **Route**: `/welcome`
- **Concepts**: `*ngIf`, événements `(click)`, liaison bidirectionnelle `[(ngModel)]`
- **Fonctionnalités**:
  - Connexion/Déconnexion simple avec bouton toggle
  - Validation du nom d'utilisateur (Défi)
  - Affichage conditionnel de messages

#### 2. **Articles Component** (Activités 2 et 3)

- **Route**: `/articles`
- **Concepts**: `*ngFor`, `[ngClass]`
- **Fonctionnalités**:
  - Ajout d'articles avec titre, contenu et importance
  - Affichage de la liste avec `*ngFor`
  - Styles conditionnels selon l'importance (élevée, moyenne, faible)
  - Suppression d'articles

#### 3. **Produits Component** (Activité 4)

- **Route**: `/produits`
- **Concepts**: `[ngStyle]`
- **Fonctionnalités**:
  - Gestion d'inventaire de produits
  - Styles dynamiques selon le niveau de stock:
    - Vert: stock > 50
    - Orange: 20 ≤ stock ≤ 50
    - Rouge: stock < 20
  - Barre de progression visuelle du stock
  - Incrémentation/Décrémentation du stock

#### 4. **Tâches Component** (Activités 5 et 6)

- **Route**: `/taches`
- **Concepts**: Combinaison de `*ngIf`, `*ngFor`, `[ngClass]`, `[ngStyle]`
- **Fonctionnalités**:
  - Gestion complète de tâches (TODO list)
  - Statut: complétée ou non complétée
  - Priorités: haute (rouge), moyenne (orange), basse (vert)
  - Texte barré pour les tâches complétées
  - Statistiques en temps réel
  - Message alternatif avec `*ngIf...else` et `<ng-template>`

#### 5. **Étudiant Component** (Atelier Guidé)

- **Route**: `/etudiant`
- **Concepts**: Affichage Maître/Détail, `*ngFor`, `*ngIf`, `[class.selected]`
- **Fonctionnalités**:
  - Liste de 10 étudiants
  - Sélection d'un étudiant pour voir ses détails
  - Édition en temps réel avec `[(ngModel)]`
  - Mise en évidence visuelle de l'étudiant sélectionné

## 🚀 Installation et Lancement

### Prérequis

- Node.js (v18 ou supérieur)
- Angular CLI (v20 ou supérieur)

### Installation

```bash
cd TP4
npm install
```

### Lancement du serveur de développement

```bash
npm start
# ou
ng serve
```

L'application sera accessible sur `http://localhost:4200`

## 🎨 Technologies Utilisées

- **Angular 20** (Standalone Components)
- **TypeScript**
- **CSS3** avec animations et gradients
- **FormsModule** pour la liaison bidirectionnelle
- **RouterModule** pour la navigation

## 📖 Guide d'Utilisation

### Navigation

Utilisez le menu de navigation en haut de la page pour accéder aux différentes activités.

### Activité 1 - Welcome

1. Cliquez sur le bouton pour vous connecter/déconnecter
2. Testez la validation avec le prénom "Mohamed"

### Activités 2-3 - Articles

1. Ajoutez des articles avec titre, contenu et niveau d'importance
2. Observez les couleurs différentes selon l'importance
3. Supprimez des articles

### Activité 4 - Produits

1. Ajoutez des produits avec leur stock
2. Observez les couleurs qui changent selon le niveau de stock
3. Utilisez les boutons +/- pour modifier le stock

### Activités 5-6 - Tâches

1. Ajoutez des tâches avec description et priorité
2. Cochez les tâches complétées
3. Observez les statistiques en temps réel
4. Supprimez les tâches terminées

### Atelier Guidé - Étudiants

1. Cliquez sur un étudiant dans la liste
2. Consultez ses détails dans la section de droite
3. Modifiez les informations (nom, classe, âge, email)
4. Les modifications sont reflétées immédiatement

## 📝 Concepts Angular Abordés

### Directives Structurelles

- **\*ngIf**: Affichage conditionnel d'éléments
- **\*ngFor**: Itération sur des collections
- **\*ngIf...else**: Affichage conditionnel avec alternative

### Directives Attributs

- **[ngClass]**: Application conditionnelle de classes CSS
- **[ngStyle]**: Application dynamique de styles inline

### Autres Concepts

- **[(ngModel)]**: Liaison bidirectionnelle (two-way binding)
- **(click)**: Gestion d'événements
- **Routing**: Navigation entre composants
- **Interfaces TypeScript**: Typage fort
- **Animations CSS**: Transitions et keyframes

## 🎓 Questions de Validation

Le TP inclut 10 questions de validation des acquis (voir énoncé) couvrant:

- Fonctionnement des directives structurelles
- Application pratique de ngClass et ngStyle
- Combinaison de directives pour améliorer la réactivité
- Impact sur l'expérience utilisateur

## ✨ Fonctionnalités Bonus

- Design moderne avec gradients et animations
- Interface responsive (mobile-friendly)
- Statistiques en temps réel
- Feedback visuel sur toutes les actions
- Validation des formulaires
- Confirmations avant suppression

## 👨‍🏫 Auteur

**Mohamed Lassoued**  
FST - Département TI

## 📄 Licence

Ce projet est destiné à un usage pédagogique dans le cadre du cours d'Angular.

---

**Date**: 2025  
**Version**: 1.0.0
