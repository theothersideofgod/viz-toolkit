import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipPrimaryComponent } from './chip-primary.component';
import { MatChipsModule, MatIconModule } from '@angular/material';


describe('ChipPrimaryComponent', () => {
  let component: ChipPrimaryComponent;
  let fixture: ComponentFixture<ChipPrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatChipsModule, MatIconModule],
      declarations: [ChipPrimaryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
