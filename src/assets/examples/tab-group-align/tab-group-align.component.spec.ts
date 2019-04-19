import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupAlignComponentComponent } from './tab-group-align.component';

describe('TabGroupAlignComponentComponent', () => {
  let component: TabGroupAlignComponentComponent;
  let fixture: ComponentFixture<TabGroupAlignComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabGroupAlignComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupAlignComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
