import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeNestedNodesComponentComponent } from './tree-nested-nodes.component';

describe('TreeNestedNodesComponentComponent', () => {
  let component: TreeNestedNodesComponentComponent;
  let fixture: ComponentFixture<TreeNestedNodesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TreeNestedNodesComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeNestedNodesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
