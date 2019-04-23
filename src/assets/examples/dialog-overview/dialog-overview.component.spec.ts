import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOverviewComponentComponent } from './dialog-overview.component';

describe('DialogOverviewComponentComponent', () => {
  let component: DialogOverviewComponentComponent;
  let fixture: ComponentFixture<DialogOverviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogOverviewComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOverviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
