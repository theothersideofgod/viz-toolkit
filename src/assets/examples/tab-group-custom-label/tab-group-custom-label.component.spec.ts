import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupCustomLabelComponentComponent } from './tab-group-custom-label.component';

describe('TabGroupCustomLabelComponentComponent', () => {
  let component: TabGroupCustomLabelComponentComponent;
  let fixture: ComponentFixture<TabGroupCustomLabelComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabGroupCustomLabelComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupCustomLabelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
