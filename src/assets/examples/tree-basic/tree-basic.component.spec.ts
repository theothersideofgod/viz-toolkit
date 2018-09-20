import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeBasicComponent } from './tree-basic.component';
import { VizTreeModule } from 'libs';
import { MatIconModule } from '@angular/material';

describe('TreeBasicComponent', () => {
  let component: TreeBasicComponent;
  let fixture: ComponentFixture<TreeBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VizTreeModule, MatIconModule],
      declarations: [TreeBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
