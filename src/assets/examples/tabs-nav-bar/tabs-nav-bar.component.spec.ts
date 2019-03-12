import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsNavBarComponentComponent } from './tabs-nav-bar.component';

describe('TabsNavBarComponentComponent', () => {
  let component: TabsNavBarComponentComponent;
  let fixture: ComponentFixture<TabsNavBarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabsNavBarComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsNavBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
