import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupThemeExampleComponent } from './tab-group-theme.component';

describe('TabGroupThemeExampleComponent', () => {
  let component: TabGroupThemeExampleComponent;
  let fixture: ComponentFixture<TabGroupThemeExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabGroupThemeExampleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupThemeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
