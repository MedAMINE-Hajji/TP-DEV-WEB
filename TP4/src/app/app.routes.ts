import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome';
import { ArticlesComponent } from './components/articles/articles';
import { ProduitsComponent } from './components/produits/produits';
import { TachesComponent } from './components/taches/taches';
import { EtudiantComponent } from './components/etudiant/etudiant';

export const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'produits', component: ProduitsComponent },
  { path: 'taches', component: TachesComponent },
  { path: 'etudiant', component: EtudiantComponent }
];
