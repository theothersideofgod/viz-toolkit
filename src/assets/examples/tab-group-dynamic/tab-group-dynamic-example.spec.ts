import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupDynamicExampleComponent } from './tab-group-dynamic.component';

describe('TabGroupDynamicExampleComponent', () => {
  let component: TabGroupDynamicExampleComponent;
  let fixture: ComponentFixture<TabGroupDynamicExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabGroupDynamicExampleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupDynamicExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
