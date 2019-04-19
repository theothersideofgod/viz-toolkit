import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupThemeComponentComponent } from './tab-group-theme.component';

describe('TabGroupThemeComponentComponent', () => {
  let component: TabGroupThemeComponentComponent;
  let fixture: ComponentFixture<TabGroupThemeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabGroupThemeComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupThemeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
