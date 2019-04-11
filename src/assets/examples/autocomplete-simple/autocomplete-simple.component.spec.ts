import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteSimpleComponentComponent } from './autocomplete-simple.component';

describe('AutocompleteSimpleComponentComponent', () => {
  let component: AutocompleteSimpleComponentComponent;
  let fixture: ComponentFixture<AutocompleteSimpleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteSimpleComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteSimpleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
