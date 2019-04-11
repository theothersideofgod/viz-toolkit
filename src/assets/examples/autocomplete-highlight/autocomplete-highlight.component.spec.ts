import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteHighlightComponentComponent } from './autocomplete-highlight.component';

describe('AutocompleteHighlightComponentComponent', () => {
  let component: AutocompleteHighlightComponentComponent;
  let fixture: ComponentFixture<AutocompleteHighlightComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteHighlightComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteHighlightComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
