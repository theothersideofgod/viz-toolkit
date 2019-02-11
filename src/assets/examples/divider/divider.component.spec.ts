import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerComponentComponent } from './divider.component';

describe('DividerComponentComponent', () => {
  let component: DividerComponentComponent;
  let fixture: ComponentFixture<DividerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DividerComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
