import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanelBasicComponent } from './expansion-panel-basic.component';

describe('ExpansionPanelBasicComponent', () => {
  let component: ExpansionPanelBasicComponent;
  let fixture: ComponentFixture<ExpansionPanelBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpansionPanelBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionPanelBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
