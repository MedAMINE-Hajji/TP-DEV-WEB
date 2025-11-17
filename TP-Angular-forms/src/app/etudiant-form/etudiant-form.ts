import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Etudiant } from '../etudiant';

@Component({
  selector: 'app-etudiant-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './etudiant-form.html',
  styleUrls: ['./etudiant-form.css']
})
export class EtudiantFormComponent {
  classes = ['L2DSI1', 'L2DSI2', 'L2DSI3', 'L3DSI1', 'L3DSI2'];
  
  model = new Etudiant(18, 'Mohamed', this.classes[0], 'XYZ');
  
  submitted = false;

  onSubmit() { 
    this.submitted = true; 
  }

  // TODO: Remove this when we're done
  get diagnostic() { 
    return JSON.stringify(this.model); 
  }

  newEtudiant() {
    this.model = new Etudiant(42, '', '');
    this.submitted = false;
  }
}
