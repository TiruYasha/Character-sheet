import { Component, Input, OnInit } from '@angular/core';
import { IFormGroup } from '@rxweb/types';
import { AbilityScoreInformation } from 'src/app/models/sheet/sheet.model';

@Component({
  selector: 'app-abilityscore-information',
  templateUrl: './abilityscore-information.component.html',
  styleUrls: ['./abilityscore-information.component.scss']
})
export class AbilityscoreInformationComponent implements OnInit {

  @Input()
  abilityScoreInformation!: IFormGroup<AbilityScoreInformation>;

  constructor() { }

  ngOnInit(): void {
  }

}
