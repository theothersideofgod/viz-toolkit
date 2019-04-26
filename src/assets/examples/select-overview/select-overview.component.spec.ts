import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOverviewComponentComponent } from './select-overview.component';

describe('SelectOverviewComponentComponent', () => {
  let component: SelectOverviewComponentComponent;
  let fixture: ComponentFixture<SelectOverviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectOverviewComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOverviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
