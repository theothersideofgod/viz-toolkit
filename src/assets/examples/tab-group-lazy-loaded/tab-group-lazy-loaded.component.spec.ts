import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupLazyLoadedComponentComponent } from './tab-group-lazy-loaded.component';

describe('TabGroupLazyLoadedComponentComponent', () => {
  let component: TabGroupLazyLoadedComponentComponent;
  let fixture: ComponentFixture<TabGroupLazyLoadedComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabGroupLazyLoadedComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupLazyLoadedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
