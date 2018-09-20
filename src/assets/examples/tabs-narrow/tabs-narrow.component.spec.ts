import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsNarrowComponent } from './tabs-narrow.component';

describe('TabsNarrowComponent', () => {
  let component: TabsNarrowComponent;
  let fixture: ComponentFixture<TabsNarrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
