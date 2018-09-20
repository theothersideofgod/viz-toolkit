import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadscrumbBasicComponent } from './breadscrumb-basic.component';

describe('BreadscrumbBasicComponent', () => {
  let component: BreadscrumbBasicComponent;
  let fixture: ComponentFixture<BreadscrumbBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
