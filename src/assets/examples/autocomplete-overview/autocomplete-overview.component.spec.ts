import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteOverviewComponentComponent } from './autocomplete-overview.component';

describe('AutocompleteOverviewComponentComponent', () => {
  let component: AutocompleteOverviewComponentComponent;
  let fixture: ComponentFixture<AutocompleteOverviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteOverviewComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteOverviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
