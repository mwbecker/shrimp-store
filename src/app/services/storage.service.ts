import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // Function to store json data in session storage
  setItemJSON(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
  // Function to store data in session storage
  setItem(key: string, value: any): void {
    sessionStorage.setItem(key, value);
  }

  // Function to retrieve json data from session storage
  getItemJSON(key: string): any {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  // Function to retrieve data from session storage
  getItem(key: string): any {
    const item = sessionStorage.getItem(key);
    return item;
  }
    // Function to remove data from session storage
  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }
}