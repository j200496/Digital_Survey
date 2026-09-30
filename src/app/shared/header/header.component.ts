import { Component,inject } from '@angular/core';
import { TenantsService } from '../../services/tenants.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';;
@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

tenantservice = inject(TenantsService);
maincolor: string = this.tenantservice.maincolor;
router = inject(Router);
Logout(){
this.router.navigate(['/']);
}
}
