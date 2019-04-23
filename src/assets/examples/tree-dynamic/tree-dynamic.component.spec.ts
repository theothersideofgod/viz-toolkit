import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeDynamicComponentComponent } from './tree-dynamic.component';

describe('TreeDynamicComponentComponent', () => {
  let component: TreeDynamicComponentComponent;
  let fixture: ComponentFixture<TreeDynamicComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TreeDynamicComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeDynamicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
