import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IFormControl } from '@rxweb/types';
import { IAbstractControl } from '@rxweb/types/reactive-form/i-abstract-control';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss']
})
export class BasicInformationComponent implements OnInit {

  @ViewChild('value')
  value!: ElementRef;

  @Input()
  control!: IAbstractControl<any>;

  editMode = false;

  constructor(private changeDetector : ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  click() {
    this.editMode = true;
    this.changeDetector.detectChanges();
    const input = this.value.nativeElement as HTMLInputElement;
    input.focus();
  }

  toViewMode() {
    this.editMode = false;
  }

}
