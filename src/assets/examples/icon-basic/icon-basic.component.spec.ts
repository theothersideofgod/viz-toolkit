import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBasicComponent } from './icon-basic.component';

describe('IconBasicComponent', () => {
  let component: IconBasicComponent;
  let fixture: ComponentFixture<IconBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
