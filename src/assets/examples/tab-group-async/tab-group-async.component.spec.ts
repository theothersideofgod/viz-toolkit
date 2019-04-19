import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupAsyncComponentComponent } from './tab-group-async.component';

describe('TabGroupAsyncComponentComponent', () => {
  let component: TabGroupAsyncComponentComponent;
  let fixture: ComponentFixture<TabGroupAsyncComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabGroupAsyncComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupAsyncComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
