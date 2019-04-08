import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipWithInputComponentComponent } from './chip-with-input.component';

describe('ChipWithInputComponentComponent', () => {
  let component: ChipWithInputComponentComponent;
  let fixture: ComponentFixture<ChipWithInputComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChipWithInputComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipWithInputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
