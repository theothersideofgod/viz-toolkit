import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupAsyncExampleComponent } from './tab-group-async.component';

describe('TabGroupAsyncExampleComponent', () => {
  let component: TabGroupAsyncExampleComponent;
  let fixture: ComponentFixture<TabGroupAsyncExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabGroupAsyncExampleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupAsyncExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
