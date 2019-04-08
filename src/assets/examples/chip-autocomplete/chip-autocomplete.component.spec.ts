import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipAutocompleteComponentComponent } from './chip-autocomplete.component';

describe('ChipAutocompleteComponentComponent', () => {
  let component: ChipAutocompleteComponentComponent;
  let fixture: ComponentFixture<ChipAutocompleteComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChipAutocompleteComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipAutocompleteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
