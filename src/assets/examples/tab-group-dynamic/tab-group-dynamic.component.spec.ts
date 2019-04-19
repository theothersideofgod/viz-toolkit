import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupDynamicComponentComponent } from './tab-group-dynamic.component';

describe('TabGroupDynamicComponentComponent', () => {
  let component: TabGroupDynamicComponentComponent;
  let fixture: ComponentFixture<TabGroupDynamicComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabGroupDynamicComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupDynamicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
