import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TenantsService } from '../../services/tenants.service';
import { PreguntasService } from '../../services/preguntas.service';

export type PreguntaTipo = 'range' | 'select' | 'checkbox_multiple' | 'radio';

export interface PreguntaOpcion {
  value: string;
  label: string;
}

export interface Pregunta {
  id: string;
  tipo: PreguntaTipo;
  pregunta: string;
  placeholder?: string;
  opciones?: PreguntaOpcion[];
  required?: boolean;
  radioOptions?: PreguntaOpcion[];
}

@Component({
  selector: 'app-encuesta-dinamica',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class EncuestaDinamicaComponent implements OnInit {

  tenantservice = inject(TenantsService);
 preguntaservice = inject(PreguntasService)
pregunta = this.preguntaservice.preguntas;
  color = this.tenantservice.maincolor;
  verde = '#198754';
  azul = '#0d6efd';
  morado = '#381577';
  edad = 18;
  EdadMax = 90
  limite: number = 0;

  preguntas: Pregunta[] = [
    {
      id: 'nombreCompleto',
      tipo: 'range',
      pregunta: 'Rango de edad',
    },
    {
      id: 'genero',
      tipo: 'radio',
      pregunta: 'Genero',
      radioOptions: [
        { value: 'masculino', label: 'Masculino' },
        { value: 'femenino', label: 'Femenino' },
      ]
    },
    {
      id: 'sector',
      tipo: 'select',
      pregunta: '¿En qué sector se encuentra?',
      opciones: [
        { value: 'centro', label: 'Centro' },
        { value: 'sur', label: 'Sur' },
        { value: 'norte', label: 'Norte' },
        { value: 'occidente', label: 'Occidente' },
        { value: 'oriente', label: 'Oriente' }
      ]
    },
    {
      id: 'candidatosConocidos',
      tipo: 'checkbox_multiple',
      pregunta: '¿Cuáles de los siguientes candidatos conoce o ha escuchado mencionar?',
      opciones: [
        { value: 'candidato_1', label: 'Carlos Gil' },
        { value: 'candidato_2', label: 'Rafael Castillo' },
        { value: 'candidato_3', label: 'Dio Astacio' },
        { value: 'candidato_4', label: 'Luis Alberto' },
        { value: 'candidato_5', label: 'No se/Ninguno' }
      ]
    },
    {
      id: 'candidatosCercanos',
      tipo: 'checkbox_multiple',
      pregunta: '¿Cuáles de los siguientes candidatos son más cercanos a la gente?',
      opciones: [
        { value: 'candidato_1', label: 'Carlos Gil' },
        { value: 'candidato_2', label: 'Rafael Castillo' },
        { value: 'candidato_3', label: 'Dio Astacio' },
        { value: 'candidato_4', label: 'Luis Alberto' },
         { value: 'candidato_5', label: 'No se/Ninguno' }
      ]
    },
    {
      id: 'candidatosVotaria',
      tipo: 'checkbox_multiple',
      pregunta: '¿Por cuál de los siguientes candidatos votaría?',
      opciones: [
        { value: 'candidato_1', label: 'Carlos Gil' },
        { value: 'candidato_2', label: 'Rafael Castillo' },
        { value: 'candidato_3', label: 'Dio Astacio' },
        { value: 'candidato_4', label: 'Luis Alberto' },
        { value: 'candidato_5', label: 'No se/Ninguno' }
      ]
    }
  ];

  respuestasPayload: { [key: string]: any } = {};

  ngOnInit(): void {
  this.Contabilizador();
    this.preguntas.forEach((pregunta: Pregunta) => {
      if (pregunta.tipo === 'checkbox_multiple') {
        this.respuestasPayload[pregunta.id] = [];
      } else {
        this.respuestasPayload[pregunta.id] = '';
      }
    });
  }
  cantidad: number = 20;
  mensaje: string = ''
  Contabilizador(): number {
    if (this.cantidad <= 0) {
      alert('Ya agotaste tu limite!');
      this.mensaje = 'Todas tus encuestas fueron realizadas!'
      return this.cantidad;
    }
    this.mensaje = 'cantidad de encuestas a realizar ='
    this.cantidad -= 1;
    return this.cantidad;
  }

  onCheckboxChange(pregunta: Pregunta, opcion: string, isChecked: boolean): void {
    const seleccionActual: string[] = Array.isArray(this.respuestasPayload[pregunta.id])
      ? [...this.respuestasPayload[pregunta.id]]
      : [];

    if (isChecked && !seleccionActual.includes(opcion)) {
      seleccionActual.push(opcion);
    }

    if (!isChecked) {
      const indice = seleccionActual.indexOf(opcion);
      if (indice >= 0) {
        seleccionActual.splice(indice, 1);
      }
    }

    this.respuestasPayload[pregunta.id] = seleccionActual;
  }

  onSubmit(): void {
    console.log('Payload final de encuesta:', JSON.stringify(this.respuestasPayload));
  }
}
