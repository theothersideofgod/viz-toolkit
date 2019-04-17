import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupHeaderBelowExampleComponent } from './tab-group-header-below.component';

describe('TabGroupHeaderBelowExampleComponent', () => {
  let component: TabGroupHeaderBelowExampleComponent;
  let fixture: ComponentFixture<TabGroupHeaderBelowExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabGroupHeaderBelowExampleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupHeaderBelowExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
