import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantsService } from '../../services/tenants.service';
import { AlertsService } from '../../services/alerts.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
tenantservice = inject(TenantsService);
alertservice = inject(AlertsService);
 color = this.tenantservice.maincolor;
 router = inject(Router);
  username: string = '';
  password: string = ''

  Login() {
    const username = this.username.trim();
    const password = this.password.trim();
   if(username === '' || password === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }
if(username === 'admin' && password === 'admin') {
      this.router.navigate(['layout/home']);
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
console.log('Username:', username);
    console.log('Password:', password);
  
  }
}
