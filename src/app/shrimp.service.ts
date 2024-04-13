import { Injectable } from '@angular/core';
import { Shrimp } from './shrimp';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ShrimpService {
  private shrimpURL = `${environment.httpBaseURL}/shrimps`;  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /** Log a ShrimpService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ShrimpService: ${message}`);
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  getShrimps(): Observable<Shrimp[]> {
    return this.http.get<Shrimp[]>(this.shrimpURL)
      .pipe(
        tap(_ => this.log('fetched shrimps')),
        catchError(this.handleError<Shrimp[]>('getShrimps', []))
      );
  }
  getShrimp(id: number): Observable<Shrimp> {
    const url = `${this.shrimpURL}/${id}`;
    return this.http.get<Shrimp>(url).pipe(
      tap(_ => this.log(`fetched shrimp id=${id}`)),
      catchError(this.handleError<Shrimp>(`getShrimp id=${id}`))
    );
  }
  updateShrimp(shrimp: Shrimp): Observable<any> {
    return this.http.put(this.shrimpURL, shrimp, this.httpOptions).pipe(
      tap(_ => this.log(`updated shrimp id=${shrimp.id}`)),
      catchError(this.handleError<any>('updateShrimp'))
    );
  }

  addShrimp(shrimp: Shrimp): Observable<Shrimp> {
    return this.http.post<Shrimp>(this.shrimpURL, shrimp, this.httpOptions).pipe(
      tap((newShrimp: Shrimp) => this.log(`added shrimp w/ id=${newShrimp.id}`)),
      catchError(this.handleError<Shrimp>('addShrimp'))
    );
  }
  deleteShrimp(id: number): Observable<Shrimp> {
    const url = `${this.shrimpURL}/${id}`;
  
    return this.http.delete<Shrimp>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted shrimp id=${id}`)),
      catchError(this.handleError<Shrimp>('deleteShrimp'))
    );
  }
  searchShrimps(term: string): Observable<Shrimp[]> {
    if (!term.trim()) {
      // if not search term, return empty shrimp array.
      return of([]);
    }
    return this.http.get<Shrimp[]>(`${this.shrimpURL}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found shrimps matching "${term}"`) :
         this.log(`no shrimps matching "${term}"`)),
      catchError(this.handleError<Shrimp[]>('searchShrimps', []))
    );
  }
  constructor(private messageService: MessageService, private http: HttpClient) { }


}

