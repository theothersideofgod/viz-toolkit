import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOverviewComponentComponent } from './input-overview.component';

describe('InputOverviewComponentComponent', () => {
  let component: InputOverviewComponentComponent;
  let fixture: ComponentFixture<InputOverviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputOverviewComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOverviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
