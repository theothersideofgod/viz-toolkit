import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupBasicComponentComponent } from './tab-group-basic.component';

describe('TabGroupBasicComponentComponent', () => {
  let component: TabGroupBasicComponentComponent;
  let fixture: ComponentFixture<TabGroupBasicComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabGroupBasicComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupBasicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
