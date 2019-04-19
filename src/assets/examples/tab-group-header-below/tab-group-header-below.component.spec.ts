import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupHeaderBelowComponentComponent } from './tab-group-header-below.component';

describe('TabGroupHeaderBelowComponentComponent', () => {
  let component: TabGroupHeaderBelowComponentComponent;
  let fixture: ComponentFixture<TabGroupHeaderBelowComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabGroupHeaderBelowComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupHeaderBelowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
