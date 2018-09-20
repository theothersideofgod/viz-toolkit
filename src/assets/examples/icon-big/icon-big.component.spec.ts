import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBigComponent } from './icon-big.component';
import { MatIconModule } from '@angular/material';

describe('IconBigComponent', () => {
  let component: IconBigComponent;
  let fixture: ComponentFixture<IconBigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [IconBigComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
