import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipDisableComponent } from './chip-disable.component';
import { MatChipsModule, MatIconModule } from '@angular/material';

describe('ChipDisableComponent', () => {
  let component: ChipDisableComponent;
  let fixture: ComponentFixture<ChipDisableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatChipsModule, MatIconModule],
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
