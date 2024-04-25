import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { CustomJwtPayload } from '../customJwtPayload';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(public AuthenticationService: AuthenticationService) {}
  
  getUser() : CustomJwtPayload | null 
  {
    return this.AuthenticationService.decodeToken();
  }
}
