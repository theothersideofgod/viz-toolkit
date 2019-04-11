import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteFilterComponentComponent } from './autocomplete-filter.component';

describe('AutocompleteFilterComponentComponent', () => {
  let component: AutocompleteFilterComponentComponent;
  let fixture: ComponentFixture<AutocompleteFilterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteFilterComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteFilterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
