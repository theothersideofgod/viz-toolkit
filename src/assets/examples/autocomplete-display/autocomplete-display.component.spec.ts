import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteDisplayComponentComponent } from './autocomplete-display.component';

describe('AutocompleteDisplayComponentComponent', () => {
  let component: AutocompleteDisplayComponentComponent;
  let fixture: ComponentFixture<AutocompleteDisplayComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteDisplayComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteDisplayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
