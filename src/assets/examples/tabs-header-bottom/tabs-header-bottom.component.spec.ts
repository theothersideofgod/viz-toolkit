import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsHeaderBottomComponentComponent } from './tabs-header-bottom.component';

describe('TabsHeaderBottomComponentComponent', () => {
  let component: TabsHeaderBottomComponentComponent;
  let fixture: ComponentFixture<TabsHeaderBottomComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabsHeaderBottomComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsHeaderBottomComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
