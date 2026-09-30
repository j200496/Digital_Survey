import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { ResultadosComponent } from './components/resultados/resultados.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {path: 'preguntas',component:PreguntasComponent},
      {path:'resultados',component:ResultadosComponent}
    ]
  }
];
