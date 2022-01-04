import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BasicInformation, Sheet } from '../models/sheet/sheet.model';
import { SheetService } from '../services/sheet.service';
import { IFormGroup, IFormBuilder } from '@rxweb/types';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent implements OnInit {
  formGroup!: IFormGroup<Sheet>;
  formBuilder: IFormBuilder;

  constructor(private sheetService: SheetService,
    private fb: FormBuilder) {
    this.formBuilder = fb;

  }

  ngOnInit(): void {

    this.sheetService.changeSheet('test')
      .subscribe(sheet => {
        this.formGroup = this.formBuilder.group<Sheet>({
          basicInformation: this.formBuilder.group<BasicInformation>({
            characterName: sheet.basicInformation.characterName,
            level: sheet.basicInformation.level,
            xp: sheet.basicInformation.xp
          })
        });

        this.formGroup.valueChanges.subscribe(form => {
            this.sheetService.setSheet(form as Sheet);
        });

      });
  }
}
