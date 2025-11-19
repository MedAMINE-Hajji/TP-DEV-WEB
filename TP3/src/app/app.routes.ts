import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Bienvenue } from './components/bienvenue/bienvenue';
import { Game } from './components/game/game';

export const routes: Routes = [
  { path: '', component: Home, title: 'Accueil - TP3' },
  { path: 'home', component: Home, title: 'Accueil - TP3' },
  { path: 'activites', component: Bienvenue, title: 'Activités Pratiques - TP3' },
  { path: 'quiz', component: Game, title: 'Jeu de Quiz - TP3' },
  { path: '**', redirectTo: '' }
];
