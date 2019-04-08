import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioWidthNgmodelComponentComponent } from './radio-width-ngmodel.component';

describe('RadioWidthNgmodelComponentComponent', () => {
  let component: RadioWidthNgmodelComponentComponent;
  let fixture: ComponentFixture<RadioWidthNgmodelComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RadioWidthNgmodelComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioWidthNgmodelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
