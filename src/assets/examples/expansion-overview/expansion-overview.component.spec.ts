import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionOverviewComponentComponent } from './expansion-overview.component';

describe('ExpansionOverviewComponentComponent', () => {
  let component: ExpansionOverviewComponentComponent;
  let fixture: ComponentFixture<ExpansionOverviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpansionOverviewComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionOverviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
