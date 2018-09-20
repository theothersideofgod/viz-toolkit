import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeCheckboxComponent } from './tree-checkbox.component';
import { VizTreeModule } from 'libs';
import { MatCheckboxModule, MatIconModule } from '@angular/material';

describe('TreeCheckboxComponent', () => {
  let component: TreeCheckboxComponent;
  let fixture: ComponentFixture<TreeCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VizTreeModule, MatCheckboxModule, MatIconModule]
      declarations: [TreeCheckboxComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
