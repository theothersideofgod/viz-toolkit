import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupStretchedExampleComponent } from './tab-group-stretched.component';

describe('TabGroupStretchedExampleComponent', () => {
  let component: TabGroupStretchedExampleComponent;
  let fixture: ComponentFixture<TabGroupStretchedExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabGroupStretchedExampleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupStretchedExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
