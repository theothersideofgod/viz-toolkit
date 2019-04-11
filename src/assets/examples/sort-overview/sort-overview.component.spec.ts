import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortOverviewComponentComponent } from './sort-overview.component';

describe('SortOverviewComponentComponent', () => {
  let component: SortOverviewComponentComponent;
  let fixture: ComponentFixture<SortOverviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SortOverviewComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortOverviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
