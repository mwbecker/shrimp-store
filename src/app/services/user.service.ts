import { Injectable } from '@angular/core';
import { SocialAuthService, GoogleSigninButtonModule, SocialUser } from '@abacritt/angularx-social-login';
import { jwtDecode, JwtPayload }from 'jwt-decode';
import {CustomJwtPayload} from '../customJwtPayload';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private tokenKey = 'token';

  getUser(): CustomJwtPayload | null {
    let token = localStorage.getItem(this.tokenKey);
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

  constructor() { }
}
