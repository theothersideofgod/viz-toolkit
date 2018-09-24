import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipBasicComponent } from './chip-basic.component';
import { MatChipsModule } from '@angular/material';

describe('ChipBasicComponent', () => {
  let component: ChipBasicComponent;
  let fixture: ComponentFixture<ChipBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatChipsModule],
      declarations: [ChipBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
