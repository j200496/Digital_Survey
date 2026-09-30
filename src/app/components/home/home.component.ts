import { Component } from '@angular/core';
import { EncuestaDinamicaComponent } from '../form/form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EncuestaDinamicaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
