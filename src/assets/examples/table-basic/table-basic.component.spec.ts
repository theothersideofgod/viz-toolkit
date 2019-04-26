import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBasicComponentComponent } from './table-basic.component';

describe('TableBasicComponentComponent', () => {
  let component: TableBasicComponentComponent;
  let fixture: ComponentFixture<TableBasicComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableBasicComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBasicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
