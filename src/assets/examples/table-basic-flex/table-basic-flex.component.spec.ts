import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBasicFlexComponentComponent } from './table-basic-flex.component';

describe('TableBasicFlexComponentComponent', () => {
  let component: TableBasicFlexComponentComponent;
  let fixture: ComponentFixture<TableBasicFlexComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableBasicFlexComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBasicFlexComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
