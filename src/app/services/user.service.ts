import { Injectable } from '@angular/core';
import { jwtDecode, JwtPayload }from 'jwt-decode';
import {CustomJwtPayload} from '../customJwtPayload';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUser(): CustomJwtPayload | null {
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

  constructor() { }
}
