import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IFormControl } from '@rxweb/types';
import { IAbstractControl } from '@rxweb/types/reactive-form/i-abstract-control';
import { tap } from 'rxjs';

@Component({
  selector: 'app-abilityscore-control',
  templateUrl: './abilityscore-control.component.html',
  styleUrls: ['./abilityscore-control.component.scss']
})
export class AbilityscoreControlComponent implements OnInit {
  @ViewChild('value')
  value!: ElementRef;

  @Input()
  control!: IAbstractControl<number>;

  editMode = false;
  modifier: number = 0;
  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.modifier = Math.floor((this.control.value! - 10) / 2)

    this.control.valueChanges.subscribe(value => {
      this.modifier = Math.floor((value! - 10) / 2)
    });
  }

  toEditMode() {
    this.editMode = true;
    this.changeDetector.detectChanges();
    const input = this.value.nativeElement as HTMLInputElement;
    input.focus();
  }

  toViewMode() {
    this.editMode = false;
  }
}
