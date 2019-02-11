import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeDynamicDataComponentComponent } from './tree-dynamic-data.component';

describe('TreeDynamicDataComponentComponent', () => {
  let component: TreeDynamicDataComponentComponent;
  let fixture: ComponentFixture<TreeDynamicDataComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TreeDynamicDataComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeDynamicDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
