# 🚀 TP3 - Guide de Démarrage Rapide

## ⚡ Démarrage Immédiat

```powershell
cd C:\Users\LENOVO\Documents\GitHub\TP-DEV-WEB\TP3
ng serve --port 4202
```

Ouvrez: `http://localhost:4202`

---

## 🗺️ Navigation Rapide

### 3 Pages Principales

| Page             | URL          | Description                     |
| ---------------- | ------------ | ------------------------------- |
| 🏠 **Accueil**   | `/`          | Présentation et navigation      |
| 📚 **Activités** | `/activites` | Produits + Panier + Utilisateur |
| 🎮 **Quiz**      | `/quiz`      | Jeu de questions                |

---

## 🎯 Ce Qui a Changé

### ❌ AVANT

```
Tout sur une seule page:
┌─────────────────────────┐
│ En-tête                 │
├─────────────────────────┤
│ Bienvenue               │
│ Produit 1               │
│ Produit 2               │
│ Panier                  │
│ Utilisateur             │
│ ou                      │
│ Quiz Home               │
│ ou                      │
│ Quiz Game               │
└─────────────────────────┘
```

### ✅ APRÈS

```
3 pages séparées avec navigation:

┌─────────────────────────────┐
│ 🎓 Navbar (sticky)          │
│ Accueil | Activités | Quiz  │
├─────────────────────────────┤
│                             │
│   [Page Active]             │
│                             │
│   • Accueil: Présentation   │
│   • Activités: Produits     │
│   • Quiz: Questions         │
│                             │
├─────────────────────────────┤
│ Footer                      │
└─────────────────────────────┘
```

---

## 🎨 Design Moderne

### Navbar

- Gradient violet (#667eea → #764ba2)
- Position sticky (reste en haut)
- Icônes + animations hover
- Indicateur page active

### Animations

- **fadeIn** - Apparition douce
- **slideDown** - Descente navbar
- **bounce** - Rebond icônes
- **pulse** - Pulsation boutons
- **wave** - Ondulation

### Couleurs

- **Primaire**: Violet (#667eea)
- **Secondaire**: Rose (#f093fb)
- **Accent**: Orange (#f5af19)
- **Background**: Gris clair (#f5f7fa)

---

## 📱 Pages Détaillées

### 1️⃣ Page Accueil (`/`)

**Contenu:**

```
🎓 TP3 - Angular Data Binding
Découvrez les concepts de data binding

┌────────────────┬────────────────┐
│ 📚 Activités   │ 🎮 Quiz        │
│ Pratiques      │ Interactif     │
│                │                │
│ • Interpolate  │ • 10 Questions │
│ • Binding      │ • Score        │
│ • Input/Output │ • Résultats    │
│                │                │
│ [Découvrir 🚀] │ [Commencer 🎆] │
└────────────────┴────────────────┘

Technologies: 🅰️ Angular | 🔷 TS | 🎨 CSS3
```

### 2️⃣ Page Activités (`/activites`)

**Contenu:**

```
📚 Activités Pratiques (1-8)
Bienvenue sur notre site !

┌─────────────────────────────────┐
│ 👋 Bienvenue                    │
│ Explorez nos produits high-tech │
└─────────────────────────────────┘

┌──────────────────┬─────────────┐
│ 🛒 Nos Produits  │ 🛍️ Panier   │
│                  │             │
│ 💻 Ordinateur    │ Items: 0    │
│ [Ajouter]        │             │
│                  │ 👤 Utilisat.│
│ 📱 Smartphone    │ Nom: ___    │
│ [Ajouter]        │ Email: ___  │
└──────────────────┴─────────────┘

📦 Livraison | 🔒 Paiement | 👍 Garantie
```

### 3️⃣ Page Quiz (`/quiz`)

**Contenu:**

```
🎮 Jeu de Quiz

Question 1/10
Quelle est la capitale de la France?

○ Londres
○ Paris     ← Sélectionné
○ Berlin
○ Madrid

[Suivant →]

Score: 0/10  Progress: ▓▓▓░░░░░░░
```

---

## 🔗 Interrelations

### Communication entre Composants

**Activités → Produit**

```typescript
[nomProduit] = "'Ordinateur'"; // Input
```

**Produit → Activités**

```typescript
ajouterAuPanier = 'gererAjout($event)'; // Output
```

**Activités → Panier**

```typescript
[items] = 'panierItems'; // Input
```

### Flow de Données

```
User click [Ajouter]
       ↓
Produit.ajouterProduit()
       ↓
emit(nomProduit)
       ↓
Bienvenue.gererAjoutAuPanier()
       ↓
panierItems.push()
       ↓
Panier reçoit [items]
       ↓
Affichage mis à jour
```

---

## ✅ Checklist de Test

### Navigation

- [ ] Cliquer sur "Accueil" dans la navbar
- [ ] Cliquer sur "Activités Pratiques" dans la navbar
- [ ] Cliquer sur "Jeu de Quiz" dans la navbar
- [ ] Vérifier que l'URL change
- [ ] Vérifier que le menu s'illumine sur la page active

### Page Accueil

- [ ] Voir la présentation du TP3
- [ ] Cliquer sur "Découvrir" → va à /activites
- [ ] Cliquer sur "Commencer le Quiz" → va à /quiz
- [ ] Voir la section technologies

### Page Activités

- [ ] Voir le message de bienvenue
- [ ] Voir les 2 produits (Ordinateur, Smartphone)
- [ ] Cliquer "Ajouter au panier" sur Ordinateur
- [ ] Vérifier que le panier affiche "Ordinateur Portable"
- [ ] Cliquer "Ajouter au panier" sur Smartphone
- [ ] Vérifier que le panier affiche les 2 items
- [ ] Voir les infos utilisateur
- [ ] Voir les 3 cartes informatives en bas

### Page Quiz

- [ ] Voir l'interface du quiz
- [ ] Répondre aux questions
- [ ] Voir le score se mettre à jour
- [ ] Obtenir les résultats finaux

### Responsive

- [ ] Réduire la fenêtre à < 768px
- [ ] Vérifier que le menu passe en colonne
- [ ] Vérifier que les grids passent en 1 colonne
- [ ] Vérifier que tout reste lisible

### Animations

- [ ] Voir la navbar descendre au chargement
- [ ] Hover sur les liens de navigation
- [ ] Voir les cartes monter au chargement
- [ ] Voir les icônes rebondir
- [ ] Voir les boutons pulser

---

## 🎯 Activités Angular Démontrées

| #   | Concept          | Localisation     | Code                         |
| --- | ---------------- | ---------------- | ---------------------------- |
| 1   | Interpolation    | bienvenue.html   | `{{ titre }}`                |
| 2   | Property Binding | produit.html     | `[src]="imageUrl"`           |
| 3   | Event Binding    | produit.html     | `(click)="afficherAlerte()"` |
| 4   | Two-way Binding  | utilisateur.html | `[(ngModel)]="nom"`          |
| 5   | Property Binding | produit.html     | `[disabled]="!enStock"`      |
| 6   | @Input           | panier.ts        | `@Input() items: string[]`   |
| 7   | @Input           | produit.ts       | `@Input() nomProduit`        |
| 8   | Pipes            | produit.html     | `{{ prix \| currency }}`     |

---

## 🛠️ Commandes Utiles

### Démarrage

```powershell
# Port par défaut
npm start

# Port personnalisé
ng serve --port 4202

# Port automatique
ng serve --port 0

# Ouvrir automatiquement le navigateur
ng serve --open --port 4202
```

### Développement

```powershell
# Compiler
ng build

# Tests
ng test

# Linter
ng lint
```

### Dépannage

```powershell
# Nettoyer
rm -r node_modules
rm package-lock.json
npm install

# Tuer le processus Node
Get-Process -Name "node" | Stop-Process -Force
```

---

## 📊 Structure des Fichiers

```
TP3/
├── src/
│   ├── app/
│   │   ├── app.ts          ← Config principale
│   │   ├── app.html        ← Navbar + router-outlet
│   │   ├── app.css         ← Styles navbar/footer
│   │   ├── app.routes.ts   ← 3 routes configurées
│   │   └── components/
│   │       ├── home/       ← Page accueil (/)
│   │       │   ├── home.ts
│   │       │   ├── home.html
│   │       │   └── home.css
│   │       ├── bienvenue/  ← Page activités (/activites)
│   │       │   ├── bienvenue.ts
│   │       │   ├── bienvenue.html
│   │       │   └── bienvenue.css
│   │       ├── game/       ← Page quiz (/quiz)
│   │       │   ├── game.ts
│   │       │   ├── game.html
│   │       │   └── game.css
│   │       ├── produit/    ← Composant réutilisable
│   │       ├── panier/     ← Composant réutilisable
│   │       └── utilisateur/ ← Composant réutilisable
│   └── index.html
└── RESTRUCTURATION_COMPLETE.md  ← Documentation détaillée
```

---

## 🎨 Palette de Couleurs

```css
/* Gradients */
Navbar:    #667eea → #764ba2 (violet)
Featured:  #f093fb → #f5576c (rose)
Button:    #f5af19 → #f12711 (orange)

/* Solides */
Background: #f5f7fa → #e3e9f0 (gris)
Text:       #2c3e50 (bleu foncé)
Secondary:  #7f8c8d (gris)
Primary:    #3498db (bleu)
```

---

## 💡 Conseils

### Pour Présenter

1. **Commencer par l'accueil** - Vue d'ensemble
2. **Montrer la navigation** - Cliquer sur chaque lien
3. **Démontrer les activités** - Ajouter des produits au panier
4. **Tester le quiz** - Répondre à quelques questions
5. **Montrer le responsive** - Réduire la fenêtre

### Pour Développer

1. **Utiliser Git** - Commit fréquents
2. **Tester en continu** - Après chaque modification
3. **Console ouverte** - Surveiller les erreurs
4. **DevTools Angular** - Extension Chrome/Firefox

---

## 📸 Screenshots Attendus

### Accueil

- Hero section avec gradient violet
- 2 cartes de fonctionnalités côte à côte
- Section technologies en bas

### Activités

- En-tête blanc avec titre
- Section bienvenue avec gradient violet
- Grid 2 colonnes (produits | panier/utilisateur)
- 3 cartes info en bas

### Quiz

- Interface de quiz avec question
- Réponses sous forme de boutons
- Score et progression

---

## ✨ Résumé des Améliorations

**Organisation** ✅

- 3 pages séparées au lieu d'une
- Navigation claire avec routes
- URL descriptives

**Design** ✅

- Navbar sticky moderne
- Gradients et ombres
- Animations fluides
- Responsive design

**Code** ✅

- Routing configuré
- Components bien organisés
- Props typées
- Communication claire

**UX** ✅

- Navigation intuitive
- Feedback visuel
- Transitions douces
- Accessibilité

---

## 🎉 Prêt à Tester !

```powershell
cd TP3
ng serve --port 4202
```

Ouvrez `http://localhost:4202` et explorez ! 🚀

**Bon codage avec Angular !** 💻✨
