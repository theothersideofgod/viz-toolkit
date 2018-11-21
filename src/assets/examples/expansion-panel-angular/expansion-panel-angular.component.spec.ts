import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanelAngularComponent } from './expansion-panel-angular.component';

describe('ExpansionPanelAngularComponent', () => {
  let component: ExpansionPanelAngularComponent;
  let fixture: ComponentFixture<ExpansionPanelAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpansionPanelAngularComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionPanelAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
