import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNavBarBasicComponentComponent } from './tab-nav-bar-basic.component';

describe('TabNavBarBasicComponentComponent', () => {
  let component: TabNavBarBasicComponentComponent;
  let fixture: ComponentFixture<TabNavBarBasicComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabNavBarBasicComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabNavBarBasicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
