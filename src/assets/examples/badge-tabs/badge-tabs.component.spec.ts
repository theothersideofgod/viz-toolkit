import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeTabsComponent } from './badge-tabs.component';
import { MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BadgeTabsComponent', () => {
  let component: BadgeTabsComponent;
  let fixture: ComponentFixture<BadgeTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTabsModule, BrowserAnimationsModule],
      declarations: [BadgeTabsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
