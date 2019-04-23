import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeChecklistComponentComponent } from './tree-checklist.component';

describe('TreeChecklistComponentComponent', () => {
  let component: TreeChecklistComponentComponent;
  let fixture: ComponentFixture<TreeChecklistComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TreeChecklistComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeChecklistComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
