import { EnvironmentInjector, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import {CustomJwtPayload} from '../customJwtPayload';
import { jwtDecode }from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  constructor(
    private router: Router
  ) {}

  private checkTokenValidity() {
    setInterval(() => {
      const token = localStorage.getItem(environment.tokenKey);
      if (!token) {
        // Token not found, navigate to login page
        this.router.navigate(['/login']);
        return;
      }

      // Perform token validation here
      const isValid = this.isTokenValid(token);
      if (!isValid) {
        // Token is invalid, clear from local storage and navigate to login page
        localStorage.removeItem(environment.tokenKey);
        this.router.navigate(['/login']);
      }
    }, 300000); // Check every 5 minutes (300,000 milliseconds)
  }

  public decodeToken() : CustomJwtPayload | null {
    let token = localStorage.getItem(environment.tokenKey);
    if (token){
      try {
          const decodedToken = jwtDecode(token) as CustomJwtPayload;
          return decodedToken;
      } catch (error) {
          console.error('Error decoding token:', error);
          return null;
      }
    }
    else
    {
      return null;
    }
  }

  private isTokenValid(token: string): boolean {
    
    return true; // Placeholder
  }

  public logout() {
    localStorage.removeItem(environment.tokenKey);
    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean {
    let token = localStorage.getItem(environment.tokenKey);
    return token != null && token.length > 0;
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(environment.tokenKey) : null;
  }
}