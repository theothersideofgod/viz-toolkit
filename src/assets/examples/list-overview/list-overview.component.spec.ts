import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOverviewComponentComponent } from './list-overview.component';

describe('ListOverviewComponentComponent', () => {
  let component: ListOverviewComponentComponent;
  let fixture: ComponentFixture<ListOverviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListOverviewComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOverviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
