import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface CreatedQuestion {
  id: number;
  text: string;
  options: string[];
  required: boolean;
}

@Component({
  selector: 'app-preguntas',
  imports: [FormsModule],
  templateUrl: './preguntas.component.html',
  styleUrl: './preguntas.component.css'
})
export class PreguntasComponent {
  questionText = '';
  options = ['', ''];
  required = false;
  createdQuestions: CreatedQuestion[] = [];
  private nextQuestionId = 1;

  get canCreateQuestion(): boolean {
    return Boolean(this.questionText.trim()) && this.options.filter((option) => option.trim()).length >= 2;
  }

  addOption(): void {
    this.options = [...this.options, ''];
  }

  removeOption(index: number): void {
    this.options = this.options.filter((_, optionIndex) => optionIndex !== index);
  }

  createQuestion(): void {
    const text = this.questionText.trim();
    const options = this.options.map((option) => option.trim()).filter(Boolean);

    if (!text || options.length < 2) {
      return;
    }

    this.createdQuestions = [
      ...this.createdQuestions,
      { id: this.nextQuestionId++, text, options, required: this.required }
    ];
    this.questionText = '';
    this.options = ['', ''];
    this.required = false;
  }

  removeQuestion(id: number): void {
    this.createdQuestions = this.createdQuestions.filter((question) => question.id !== id);
  }
}
