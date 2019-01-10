import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsCustomLabelComponentComponent } from './tabs-custom-label.component';

describe('TabsCustomLabelComponentComponent', () => {
  let component: TabsCustomLabelComponentComponent;
  let fixture: ComponentFixture<TabsCustomLabelComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabsCustomLabelComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsCustomLabelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
