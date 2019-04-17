import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupDynamicHeightExampleComponent } from './tab-group-dynamic-height.component';

describe('TabGroupDynamicHeightExampleComponent', () => {
  let component: TabGroupDynamicHeightExampleComponent;
  let fixture: ComponentFixture<TabGroupDynamicHeightExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabGroupDynamicHeightExampleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupDynamicHeightExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
