import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanelAngularComponentComponent } from './expansion-panel-angular.component';

describe('ExpansionPanelAngularComponentComponent', () => {
  let component: ExpansionPanelAngularComponentComponent;
  let fixture: ComponentFixture<ExpansionPanelAngularComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpansionPanelAngularComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionPanelAngularComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
