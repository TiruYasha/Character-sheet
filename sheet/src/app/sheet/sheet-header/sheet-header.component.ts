import { Component, Input, OnInit } from '@angular/core';
import { IFormGroup } from '@rxweb/types';
import { IAbstractControl } from '@rxweb/types/reactive-form/i-abstract-control';
import { BasicInformation, Sheet } from 'src/app/models/sheet/sheet.model';

@Component({
  selector: 'app-sheet-header',
  templateUrl: './sheet-header.component.html',
  styleUrls: ['./sheet-header.component.scss']
})
export class SheetHeaderComponent implements OnInit {

  @Input()
  basicInformation!: IAbstractControl<BasicInformation, Sheet>;

  basicInformationFormGroup!: IFormGroup<BasicInformation>;

  constructor() { }

  ngOnInit(): void {
    this.basicInformationFormGroup = this.basicInformation as IFormGroup<BasicInformation>;
  }

}
