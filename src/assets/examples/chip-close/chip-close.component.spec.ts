import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipCloseComponent } from './chip-close.component';

describe('ChipCloseComponent', () => {
  let component: ChipCloseComponent;
  let fixture: ComponentFixture<ChipCloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
