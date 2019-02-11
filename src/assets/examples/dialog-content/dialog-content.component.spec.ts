import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentComponentComponent } from './dialog-content.component';

describe('DialogContentComponentComponent', () => {
  let component: DialogContentComponentComponent;
  let fixture: ComponentFixture<DialogContentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogContentComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
