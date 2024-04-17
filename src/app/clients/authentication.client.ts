import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { MessageService } from '../services/message.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationClient {
  constructor(private http: HttpClient, private messageService:MessageService) {}

  public login(username: string, password: string): Observable<string> {
    return this.http.post(
      environment.httpBaseURL + '/user/login',
      {
        username: username,
        password: password,
      },
      { responseType: 'text' }
    ).pipe(
      catchError((error: any) => {
        // Handle error here
        this.messageService.add(error.message);
        console.error('An error occurred:', error);
        throw error; // Rethrow the error so it can be caught by the caller
      })
    );
  }

  public register(
    username: string,
    email: string,
    password: string
  ): Observable<string> {
    return this.http.post(
      environment.httpBaseURL + '/user/register',
      {
        username: username,
        email: email,
        password: password,
      },
      { responseType: 'text' }
    );
  }
}