import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteOptgroupComponentComponent } from './autocomplete-optgroup.component';

describe('AutocompleteOptgroupComponentComponent', () => {
  let component: AutocompleteOptgroupComponentComponent;
  let fixture: ComponentFixture<AutocompleteOptgroupComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteOptgroupComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteOptgroupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
