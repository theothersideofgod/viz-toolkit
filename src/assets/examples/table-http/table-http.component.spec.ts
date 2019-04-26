import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHttpComponentComponent } from './table-http.component';

describe('TableHttpComponentComponent', () => {
  let component: TableHttpComponentComponent;
  let fixture: ComponentFixture<TableHttpComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableHttpComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHttpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
