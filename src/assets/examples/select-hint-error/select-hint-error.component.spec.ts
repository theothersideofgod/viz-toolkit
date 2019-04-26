import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectHintErrorComponentComponent } from './select-hint-error.component';

describe('SelectHintErrorComponentComponent', () => {
  let component: SelectHintErrorComponentComponent;
  let fixture: ComponentFixture<SelectHintErrorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectHintErrorComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectHintErrorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
