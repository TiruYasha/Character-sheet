import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityscoreControlComponent } from './abilityscore-control.component';

describe('AbilityscoreControlComponent', () => {
  let component: AbilityscoreControlComponent;
  let fixture: ComponentFixture<AbilityscoreControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilityscoreControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityscoreControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
