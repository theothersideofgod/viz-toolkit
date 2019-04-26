import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectResetComponentComponent } from './select-reset.component';

describe('SelectResetComponentComponent', () => {
  let component: SelectResetComponentComponent;
  let fixture: ComponentFixture<SelectResetComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectResetComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectResetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
