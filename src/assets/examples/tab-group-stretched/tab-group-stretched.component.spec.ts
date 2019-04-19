import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupStretchedComponentComponent } from './tab-group-stretched.component';

describe('TabGroupStretchedComponentComponent', () => {
  let component: TabGroupStretchedComponentComponent;
  let fixture: ComponentFixture<TabGroupStretchedComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabGroupStretchedComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupStretchedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
