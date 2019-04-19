import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupDynamicHeightComponentComponent } from './tab-group-dynamic-height.component';

describe('TabGroupDynamicHeightComponentComponent', () => {
  let component: TabGroupDynamicHeightComponentComponent;
  let fixture: ComponentFixture<TabGroupDynamicHeightComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabGroupDynamicHeightComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupDynamicHeightComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
