import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadscrumbBasicComponent } from './breadscrumb-basic.component';
import { VizBreadcrumbComponent } from 'libs/components/breadcrumb/viz-breadcrumb.component';
import { RouterTestingModule } from '@angular/router/testing';
import { VizBreadcrumbModule } from 'libs';
import { MatIconModule } from '@angular/material';
describe('BreadscrumbBasicComponent', () => {
  let component: BreadscrumbBasicComponent;
  let fixture: ComponentFixture<BreadscrumbBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, VizBreadcrumbModule, MatIconModule],
      declarations: [BreadscrumbBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadscrumbBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
