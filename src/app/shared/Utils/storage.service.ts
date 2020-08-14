import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public static setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public static getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}
