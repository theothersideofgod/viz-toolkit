import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideToggleBasicComponent } from './slide-toggle-basic.component';
import { MatSlideToggleModule } from '@angular/material';

describe('SlideToggleBasicComponent', () => {
  let component: SlideToggleBasicComponent;
  let fixture: ComponentFixture<SlideToggleBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatSlideToggleModule],
      declarations: [SlideToggleBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideToggleBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
