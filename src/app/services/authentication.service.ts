import { EnvironmentInjector, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import {CustomJwtPayload} from '../customJwtPayload';
import { jwtDecode }from 'jwt-decode';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  baseUrl:string = environment.httpBaseURL
  private http: HttpClient;
  

  constructor(
    private router: Router,
    private messageService:MessageService,
    httpBackend: HttpBackend,
  ) {
    this.http = new HttpClient(httpBackend);
    this.validateLogin();
    this.checkLoginExpired();
  }

   /** Log a ShrimpService message with the MessageService */
   private log(message: string) {
    this.messageService.add(`ShrimpService: ${message}`);
  }
  
  private handleValidationError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      this.logout();
      return of(result as T);
    };
  }
  
  private checkLoginExpired(frequency: number = 75000) {
    setInterval(() => {
      this.validateLogin();
    }, frequency);
  }

  private validateLogin() : void{
    let token = localStorage.getItem(environment.tokenKey);
    var httpOptions = {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${token}`})
    };
    this.http.get<any>(`${this.baseUrl}/validateUserLogin`, httpOptions)
    .pipe(
      tap(_ => this.log('Validate Login')),
      catchError(this.handleValidationError<any>('validateLogin'))
    )
    .subscribe(resp =>{
       console.log(resp);
    }   
    )
  }

  public decodeToken() : CustomJwtPayload | null {
    let token = localStorage.getItem(environment.tokenKey);
    if (token){
      try {
          const decodedToken = jwtDecode(token) as CustomJwtPayload;
          console.log(decodedToken);
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

  public isLoggedIn(): boolean {
    let token = localStorage.getItem(environment.tokenKey);
    return token != null && token.length > 0;
  }

  public logout() {
    localStorage.removeItem(environment.tokenKey);
    this.router.navigate(['/login']);
  }

  public getToken(): string {
    return localStorage.getItem(environment.tokenKey) ?? "";
  }
}