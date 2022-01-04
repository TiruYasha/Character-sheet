import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sheet } from '../models/sheet/sheet.model';
import { SheetService } from '../services/sheet.service';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent implements OnInit {
  sheet$: Observable<Sheet>;

  constructor(private sheetService: SheetService) { 
    this.sheet$ = sheetService.changeSheet('test');
  }

  ngOnInit(): void {
    // this.sheetService.setSheet({
    //   basicInformation: {
    //     characterName: 'Henkie wenki',
    //     level: 1,
    //     xp: 0
    //   }
    // });

  }

}
