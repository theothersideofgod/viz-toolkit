import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipCloseComponent } from './chip-close.component';
import { MatChipsModule, MatIconModule } from '@angular/material';

describe('ChipCloseComponent', () => {
  let component: ChipCloseComponent;
  let fixture: ComponentFixture<ChipCloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatChipsModule, MatIconModule],
      declarations: [ChipCloseComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
