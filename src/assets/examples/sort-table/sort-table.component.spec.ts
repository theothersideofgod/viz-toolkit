import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortTableComponentComponent } from './sort-table.component';

describe('SortTableComponentComponent', () => {
  let component: SortTableComponentComponent;
  let fixture: ComponentFixture<SortTableComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SortTableComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
