import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBasicComponent } from './select-basic.component';
import { VizSelectModule } from 'libs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SelectBasicComponent', () => {
  let component: SelectBasicComponent;
  let fixture: ComponentFixture<SelectBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VizSelectModule, BrowserAnimationsModule],
      declarations: [SelectBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
