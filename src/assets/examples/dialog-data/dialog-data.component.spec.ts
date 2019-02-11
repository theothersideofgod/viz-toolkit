import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDataComponentComponent } from './dialog-data.component';

describe('DialogDataComponentComponent', () => {
  let component: DialogDataComponentComponent;
  let fixture: ComponentFixture<DialogDataComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogDataComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
