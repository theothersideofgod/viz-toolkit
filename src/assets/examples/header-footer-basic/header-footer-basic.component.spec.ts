import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFooterBasicComponent } from './header-footer-basic.component';
import { VizHeaderModule, VizFooterModule } from 'libs';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderFooterBasicComponent', () => {
  let component: HeaderFooterBasicComponent;
  let fixture: ComponentFixture<HeaderFooterBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VizHeaderModule, VizFooterModule, RouterTestingModule],
      declarations: [HeaderFooterBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFooterBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
