import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDisableComponent } from './select-disable.component';
import { VizSelectModule } from 'libs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SelectDisableComponent', () => {
  let component: SelectDisableComponent;
  let fixture: ComponentFixture<SelectDisableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VizSelectModule, BrowserAnimationsModule],
      declarations: [SelectDisableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
