import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-score',
  imports: [CommonModule],
  templateUrl: './score.html',
  styleUrl: './score.css',
})
export class Score {
  @Input() score: number = 0;
  @Input() bonnesReponses: number = 0;
  @Input() mauvaisesReponses: number = 0;
  @Input() nombreQuestions: number = 0;
}
