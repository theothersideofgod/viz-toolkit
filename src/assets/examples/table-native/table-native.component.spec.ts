import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNativeComponent } from './table-native.component';

describe('TableNativeComponent', () => {
  let component: TableNativeComponent;
  let fixture: ComponentFixture<TableNativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableNativeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableNativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
