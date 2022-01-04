import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Sheet } from '../models/sheet/sheet.model';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class SheetService {

  private sheet!: Sheet;
  private sheetSubject: ReplaySubject<Sheet> = new ReplaySubject<Sheet>(1);

  constructor(private localstorageService: LocalstorageService) {

  }

  changeSheet(name: string): Observable<Sheet> {
    const sheet = this.localstorageService.getItem<Sheet>(name);
    if (sheet === null) throw new Error('Sheet does not exist');
    this.sheet = sheet;
    this.sheetSubject.next(sheet);
    return this.sheetSubject.asObservable();
  }

  setSheet(sheet: Sheet): void {
    this.sheet = sheet;
    this.localstorageService.SetItem('test', sheet);
    this.sheetSubject.next(sheet);
  }

}
