import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss']
})
export class BasicInformationComponent implements OnInit {

  @Input()
  value: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
