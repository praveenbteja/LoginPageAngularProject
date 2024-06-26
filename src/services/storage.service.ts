import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { 

  }

  setSessionStorage(key, value){
    sessionStorage.setItem(key, JSON.stringify(value));
  }
  getSessionStorage(key) {
   return JSON.parse(sessionStorage.getItem(key));
  }
}
