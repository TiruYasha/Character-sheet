import { Component, Input, OnInit } from '@angular/core';
import { IFormGroup } from '@rxweb/types';
import { Sheet } from 'src/app/models/sheet/sheet.model';

@Component({
  selector: 'app-sheet-content',
  templateUrl: './sheet-content.component.html',
  styleUrls: ['./sheet-content.component.scss']
})
export class SheetContentComponent implements OnInit {

  @Input()
  form!: IFormGroup<Sheet>;


  tabs: string[] = [
    'Skills',
    'Inventory'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
