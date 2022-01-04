import { Component, Input, OnInit } from '@angular/core';
import { Sheet } from 'src/app/models/sheet/sheet.model';
import { SheetService } from 'src/app/services/sheet.service';

@Component({
  selector: 'app-sheet-header',
  templateUrl: './sheet-header.component.html',
  styleUrls: ['./sheet-header.component.scss']
})
export class SheetHeaderComponent implements OnInit {

  @Input()
  sheet!: Sheet;

  constructor(private sheetService: SheetService) { }

  ngOnInit(): void {
  }

}
