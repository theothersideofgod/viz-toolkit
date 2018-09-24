import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSmallComponent } from './icon-small.component';
import { MatIconModule } from '@angular/material';

describe('IconSmallComponent', () => {
  let component: IconSmallComponent;
  let fixture: ComponentFixture<IconSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [IconSmallComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
