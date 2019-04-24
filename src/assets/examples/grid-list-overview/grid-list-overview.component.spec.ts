import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListOverviewComponentComponent } from './grid-list-overview.component';

describe('GridListOverviewComponentComponent', () => {
  let component: GridListOverviewComponentComponent;
  let fixture: ComponentFixture<GridListOverviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GridListOverviewComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridListOverviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
