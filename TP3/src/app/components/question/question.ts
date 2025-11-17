import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question',
  imports: [CommonModule],
  templateUrl: './question.html',
  styleUrl: './question.css',
})
export class Question {
  @Input() question: string = '';
  @Input() options: string[] = [];
  @Output() reponseSelectionnee = new EventEmitter<string>();
  
  selectionnerOption(option: string): void {
    this.reponseSelectionnee.emit(option);
  }
}
