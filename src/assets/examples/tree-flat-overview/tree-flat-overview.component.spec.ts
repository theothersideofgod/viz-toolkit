import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeFlatOverviewComponentComponent } from './tree-flat-overview.component';

describe('TreeFlatOverviewComponentComponent', () => {
  let component: TreeFlatOverviewComponentComponent;
  let fixture: ComponentFixture<TreeFlatOverviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TreeFlatOverviewComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeFlatOverviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
