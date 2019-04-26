import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOptgroupComponentComponent } from './select-optgroup.component';

describe('SelectOptgroupComponentComponent', () => {
  let component: SelectOptgroupComponentComponent;
  let fixture: ComponentFixture<SelectOptgroupComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectOptgroupComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOptgroupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
