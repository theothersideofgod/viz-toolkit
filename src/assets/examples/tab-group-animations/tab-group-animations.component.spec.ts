import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupAnimationsComponentComponent } from './tab-group-animations.component';

describe('TabGroupAnimationsComponentComponent', () => {
  let component: TabGroupAnimationsComponentComponent;
  let fixture: ComponentFixture<TabGroupAnimationsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabGroupAnimationsComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupAnimationsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
