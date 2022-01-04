import { Injectable } from '@angular/core';
import { Sheet } from '../models/sheet/sheet.model';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {



  constructor() { }

  SetItem<T>(name: string, sheet: T) {
    localStorage.setItem(name, JSON.stringify(sheet));
  }

  getItem<T>(name: string): T | null {
    const jsonString = localStorage.getItem(name);

    if (jsonString == null) return null;

    return JSON.parse(jsonString);
  }
}
