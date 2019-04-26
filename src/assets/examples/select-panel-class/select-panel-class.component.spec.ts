import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPanelClassComponentComponent } from './select-panel-class.component';

describe('SelectPanelClassComponentComponent', () => {
  let component: SelectPanelClassComponentComponent;
  let fixture: ComponentFixture<SelectPanelClassComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectPanelClassComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPanelClassComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
