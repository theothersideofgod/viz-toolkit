import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFooterBasicComponent } from './header-footer-basic.component';

describe('HeaderFooterBasicComponent', () => {
  let component: HeaderFooterBasicComponent;
  let fixture: ComponentFixture<HeaderFooterBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
