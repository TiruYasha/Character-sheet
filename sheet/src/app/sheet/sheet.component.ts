import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AbilityScoreInformation, BasicInformation, Sheet } from '../models/sheet/sheet.model';
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
            xp: sheet.basicInformation.xp,
            ancestry: sheet.basicInformation.ancestry,
            heritage: sheet.basicInformation.heritage,
            background: sheet.basicInformation.background,
            class: sheet.basicInformation.class,
            size: sheet.basicInformation.size,
            speed: sheet.basicInformation.speed
          }),
          abilityScoreInformation: this.formBuilder.group<AbilityScoreInformation>({
            strength: sheet.abilityScoreInformation.strength,
            dexterity: sheet.abilityScoreInformation.dexterity,
            constitution: sheet.abilityScoreInformation.constitution,
            intelligence: sheet.abilityScoreInformation.intelligence,
            wisdom: sheet.abilityScoreInformation.wisdom,
            charisma: sheet.abilityScoreInformation.charisma
          })
        });

        this.formGroup.valueChanges.subscribe(form => {
          this.sheetService.saveSheet(form as Sheet);
        });

      });
  }
}
