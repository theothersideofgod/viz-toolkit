import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionStepsComponentComponent } from './expansion-steps.component';

describe('ExpansionStepsComponentComponent', () => {
  let component: ExpansionStepsComponentComponent;
  let fixture: ComponentFixture<ExpansionStepsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpansionStepsComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionStepsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
