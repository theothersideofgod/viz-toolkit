import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeCheckboxMaterialComponentComponent } from './tree-checkbox-material.component';

describe('TreeCheckboxMaterialComponentComponent', () => {
  let component: TreeCheckboxMaterialComponentComponent;
  let fixture: ComponentFixture<TreeCheckboxMaterialComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TreeCheckboxMaterialComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeCheckboxMaterialComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
