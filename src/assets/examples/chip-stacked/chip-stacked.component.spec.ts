import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipStackedComponentComponent } from './chip-stacked.component';

describe('ChipStackedComponentComponent', () => {
  let component: ChipStackedComponentComponent;
  let fixture: ComponentFixture<ChipStackedComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChipStackedComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipStackedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
