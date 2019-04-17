import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupCustomLabelExampleComponent } from './tab-group-custom-label.component';

describe('TabGroupCustomLabelExampleComponent', () => {
  let component: TabGroupCustomLabelExampleComponent;
  let fixture: ComponentFixture<TabGroupCustomLabelExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabGroupCustomLabelExampleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupCustomLabelExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
