import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeNestedOverviewComponentComponent } from './tree-nested-overview.component';

describe('TreeNestedOverviewComponentComponent', () => {
  let component: TreeNestedOverviewComponentComponent;
  let fixture: ComponentFixture<TreeNestedOverviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TreeNestedOverviewComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeNestedOverviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
