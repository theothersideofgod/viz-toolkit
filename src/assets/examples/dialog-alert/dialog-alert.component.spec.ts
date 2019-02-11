import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAlertComponentComponent } from './dialog-alert.component';

describe('DialogAlertComponentComponent', () => {
  let component: DialogAlertComponentComponent;
  let fixture: ComponentFixture<DialogAlertComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogAlertComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAlertComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
