import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupAlignExampleComponent } from './tab-group-align.component';

describe('TabGroupAlignExampleComponent', () => {
  let component: TabGroupAlignExampleComponent;
  let fixture: ComponentFixture<TabGroupAlignExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabGroupAlignExampleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupAlignExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
