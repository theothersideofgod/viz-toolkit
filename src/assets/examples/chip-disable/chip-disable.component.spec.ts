import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipDisableComponent } from './chip-disable.component';

describe('ChipDisableComponent', () => {
  let component: ChipDisableComponent;
  let fixture: ComponentFixture<ChipDisableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChipDisableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
