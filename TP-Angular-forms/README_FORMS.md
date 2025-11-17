# TP Angular Forms - Formulaires basés sur des modèles

## 📚 Description
Ce projet implémente un formulaire complet basé sur les modèles Angular (Template-driven Forms) selon les spécifications du TP.

## 🎯 Objectifs du TP
- Construire un formulaire Angular avec un composant et un modèle
- Créer des liaisons de données bidirectionnelles avec `[(ngModel)]`
- Suivre les changements d'état et la validité des contrôles
- Fournir un retour visuel avec des classes CSS spéciales
- Afficher les erreurs de validation aux utilisateurs
- Activer/désactiver les contrôles de formulaire dynamiquement
- Utiliser les variables de référence de modèle

## 📂 Structure du Projet

```
TP-Angular-forms/
├── src/
│   ├── app/
│   │   ├── etudiant-form/
│   │   │   ├── etudiant-form.ts       # Composant du formulaire
│   │   │   ├── etudiant-form.html     # Template HTML
│   │   │   └── etudiant-form.css      # Styles du formulaire
│   │   ├── etudiant.ts                # Modèle de données
│   │   ├── app.ts                     # Composant racine
│   │   └── app.html                   # Template racine
│   ├── forms.css                      # Styles de validation
│   └── index.html                     # Page principale
```

## 🚀 Installation et Lancement

### Prérequis
- Node.js (v18 ou supérieur)
- Angular CLI (v20 ou supérieur)

### Installation
```bash
cd TP-Angular-forms
npm install
```

### Lancement du serveur de développement
```bash
npm start
# ou
ng serve
```

L'application sera accessible sur `http://localhost:4200`

## 📖 Fonctionnalités Implémentées

### 1. Modèle de Données (Classe Etudiant)
```typescript
export class Etudiant {
  constructor(
    public id: number,
    public name: string,
    public classe: string,
    public Surname?: string  // Champ optionnel
  ) { }
}
```

### 2. Composant EtudiantForm

#### Propriétés
- **classes**: Tableau des classes disponibles (L2DSI1, L2DSI2, L2DSI3, L3DSI1, L3DSI2)
- **model**: Instance de l'étudiant (avec données de démonstration)
- **submitted**: Flag pour gérer l'affichage après soumission
- **diagnostic**: Propriété pour afficher le JSON du modèle (à supprimer en production)

#### Méthodes
- **onSubmit()**: Gère la soumission du formulaire
- **newEtudiant()**: Crée un nouvel étudiant vide et réinitialise le formulaire

### 3. Template HTML

#### Champs du formulaire
1. **Name** (obligatoire)
   - Validation: champ requis
   - Message d'erreur si vide
   - Barre de couleur pour feedback visuel

2. **Surname** (optionnel)
   - Pas de validation

3. **Classe** (obligatoire)
   - Liste déroulante avec `*ngFor`
   - Validation: sélection requise
   - Message d'erreur si non sélectionnée

#### Boutons
- **Submit**: Désactivé tant que le formulaire est invalide
- **New Etudiant**: Crée un nouvel étudiant vide

### 4. Validation Visuelle

#### Classes CSS Angular
Le formulaire utilise les classes CSS automatiques d'Angular:

| État | Classe si vrai | Classe si faux |
|------|----------------|----------------|
| Le contrôle a été visité | `ng-touched` | `ng-untouched` |
| La valeur a changé | `ng-dirty` | `ng-pristine` |
| La valeur est valide | `ng-valid` | `ng-invalid` |

#### Feedback Visuel (forms.css)
- **Barre verte (5px à gauche)**: Champ valide et requis
- **Barre rouge (5px à gauche)**: Champ invalide
- **Barre grise (5px à gauche)**: Champ pristine (non touché)

### 5. Liaison Bidirectionnelle

```html
<input 
  type="text" 
  [(ngModel)]="model.name" 
  name="name"
  required
  #name="ngModel">
```

- `[(ngModel)]`: Liaison bidirectionnelle avec la propriété du modèle
- `name`: Attribut obligatoire pour l'enregistrement du contrôle
- `#name="ngModel"`: Variable de référence pour accéder au contrôle

### 6. Gestion des Erreurs

```html
<div [hidden]="name.valid || name.pristine" class="alert alert-danger">
  Name is required
</div>
```

- Message affiché uniquement si le champ est:
  - Invalide (`!name.valid`)
  - ET a été modifié (`!name.pristine`)

### 7. Soumission du Formulaire

```html
<form (ngSubmit)="onSubmit()" #etudiantForm="ngForm">
  <!-- ... -->
  <button 
    type="submit" 
    [disabled]="!etudiantForm.form.valid">
    Submit
  </button>
</form>
```

- `(ngSubmit)`: Événement déclenché à la soumission
- `[disabled]`: Bouton désactivé si le formulaire est invalide
- `#etudiantForm="ngForm"`: Référence au formulaire

### 8. Affichage Alternatif

Après soumission, le formulaire est masqué et remplacé par un récapitulatif:

```html
<div [hidden]="!submitted">
  <h2>You submitted the following:</h2>
  <!-- Affichage des données -->
  <button (click)="submitted=false">Edit</button>
</div>
```

## 🎨 Styles CSS

### forms.css (Validation)
Styles spécifiques pour la validation avec barres de couleur:
- Vert: Champ valide
- Rouge: Champ invalide
- Gris: Champ pristine

### etudiant-form.css
Styles modernes avec:
- Dégradés de couleurs
- Animations (fadeIn, slideIn)
- Transitions fluides
- Design responsive

## 📝 Concepts Angular Abordés

### Directives
- **FormsModule**: Module nécessaire pour les formulaires basés sur modèles
- **NgForm**: Directive qui régit le formulaire
- **NgModel**: Directive pour la liaison bidirectionnelle
- **NgFor**: Directive pour itérer sur les classes

### Variables de Référence de Modèle
```html
#etudiantForm="ngForm"  <!-- Référence au formulaire -->
#name="ngModel"         <!-- Référence au contrôle -->
```

### Liaison de Données
- **Interpolation**: `{{ model.name }}`
- **Liaison de propriété**: `[disabled]="..."`
- **Liaison d'événement**: `(click)="..."`
- **Liaison bidirectionnelle**: `[(ngModel)]="..."`

### Validation
- **Attribut HTML5 `required`**: Validation native
- **Propriétés de validation**: `valid`, `invalid`, `pristine`, `dirty`, `touched`
- **Classes CSS automatiques**: `ng-valid`, `ng-invalid`, etc.

## 🔍 Détails Techniques

### FormsModule (Standalone Component)
```typescript
@Component({
  selector: 'app-etudiant-form',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Import nécessaire
  // ...
})
```

### Suivi de l'État des Contrôles
Chaque contrôle de formulaire possède plusieurs propriétés:
- `valid` / `invalid`: État de validation
- `pristine` / `dirty`: Si la valeur a été modifiée
- `touched` / `untouched`: Si le contrôle a été visité

### Réinitialisation du Formulaire
```typescript
newEtudiant() {
  this.model = new Etudiant(42, '', '');
  this.submitted = false;
}
```

## 🎯 Points Clés du TP

1. ✅ Utilisation de `[(ngModel)]` pour la liaison bidirectionnelle
2. ✅ Attribut `name` obligatoire sur chaque contrôle
3. ✅ Variables de référence (`#etudiantForm`, `#name`)
4. ✅ Validation HTML5 (`required`)
5. ✅ Classes CSS automatiques d'Angular
6. ✅ Messages d'erreur conditionnels
7. ✅ Bouton submit désactivé si formulaire invalide
8. ✅ Feedback visuel avec barres de couleur
9. ✅ Affichage alternatif après soumission
10. ✅ Gestion de la création d'un nouvel étudiant

## 📚 Résumé des Fonctionnalités Angular Utilisées

- **Modèle de formulaire HTML Angular**: Structure avec directives
- **Composant avec @Component**: EtudiantFormComponent standalone
- **Soumission avec ngSubmit**: Gestion de l'événement submit
- **Variables de référence**: #etudiantForm, #name, #classe
- **Syntaxe [(ngModel)]**: Liaison bidirectionnelle
- **Attribut name**: Pour validation et suivi
- **Propriété valid**: Contrôle de validité
- **Classes CSS personnalisées**: Feedback visuel
- **Directive NgForm**: Gestion automatique du formulaire

## 🚀 Pour Aller Plus Loin

### Améliorations Possibles
- Ajouter plus de validations (email, longueur, etc.)
- Implémenter des validateurs personnalisés
- Ajouter un champ ID auto-incrémenté
- Sauvegarder les données (localStorage, backend)
- Ajouter une liste des étudiants créés
- Implémenter la modification d'un étudiant existant

### Passage aux Reactive Forms
Ce TP utilise les **Template-driven Forms**. Angular propose aussi les **Reactive Forms** qui offrent:
- Plus de contrôle programmatique
- Meilleurevalidation complexe
- Testabilité améliorée
- Gestion d'état plus robuste

## 👨‍🏫 Auteur
**Mohamed Lassoued**  
FST - Département Info

## 📄 Licence
Ce projet est destiné à un usage pédagogique dans le cadre du cours d'Angular.

---

**Date**: 2025  
**Version**: 1.0.0  
**Angular**: 20.x (Standalone Components)
