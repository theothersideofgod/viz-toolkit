import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeFlatNodesComponentComponent } from './tree-flat-nodes.component';

describe('TreeFlatNodesComponentComponent', () => {
  let component: TreeFlatNodesComponentComponent;
  let fixture: ComponentFixture<TreeFlatNodesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TreeFlatNodesComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeFlatNodesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
