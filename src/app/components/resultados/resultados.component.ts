import { Component,inject, OnInit } from '@angular/core';
import { PreguntasService } from '../../services/preguntas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultados',
  imports: [CommonModule],
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.css'
})
export class ResultadosComponent implements OnInit {
preguntaservice = inject(PreguntasService);
preguntas = this.preguntaservice.preguntas;

ngOnInit(): void {
this.preguntas
console.log(this.preguntas)
}


}
