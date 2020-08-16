import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public static setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public static getLocalStorage(key, defaultValue = null) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  }
}
