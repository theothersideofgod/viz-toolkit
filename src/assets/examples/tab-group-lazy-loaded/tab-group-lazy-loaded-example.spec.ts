import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupLazyLoadedExampleComponent } from './tab-group-lazy-loaded.component';

describe('TabGroupLazyLoadedExampleComponent', () => {
  let component: TabGroupLazyLoadedExampleComponent;
  let fixture: ComponentFixture<TabGroupLazyLoadedExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabGroupLazyLoadedExampleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupLazyLoadedExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
