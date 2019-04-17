import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupAnimationsExampleComponent } from './tab-group-animations.component';

describe('TabGroupAnimationsExampleComponent', () => {
  let component: TabGroupAnimationsExampleComponent;
  let fixture: ComponentFixture<TabGroupAnimationsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabGroupAnimationsExampleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupAnimationsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
