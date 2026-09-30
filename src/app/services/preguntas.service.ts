import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

preguntas:string[] = ['¿Cuáles de los siguientes candidatos conoce o ha escuchado mencionar?',
  '¿Cuáles de los siguientes candidatos son más cercanos a la gente?','¿Por cuál de los siguientes candidatos votaría?',
  '¿En qué sector se encuentra?','Rango de edad','Genero'
]


}
