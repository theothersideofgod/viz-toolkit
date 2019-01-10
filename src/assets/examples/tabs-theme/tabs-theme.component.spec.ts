import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsThemeComponentComponent } from './tabs-theme.component';

describe('TabsThemeComponentComponent', () => {
  let component: TabsThemeComponentComponent;
  let fixture: ComponentFixture<TabsThemeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabsThemeComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsThemeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
