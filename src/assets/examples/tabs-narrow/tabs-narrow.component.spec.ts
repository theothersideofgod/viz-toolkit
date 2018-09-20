import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsNarrowComponent } from './tabs-narrow.component';
import { MatTabsModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TabsNarrowComponent', () => {
  let component: TabsNarrowComponent;
  let fixture: ComponentFixture<TabsNarrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTabsModule, MatListModule, BrowserAnimationsModule],
      declarations: [TabsNarrowComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsNarrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
