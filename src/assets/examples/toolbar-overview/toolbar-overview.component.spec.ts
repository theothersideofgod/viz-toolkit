import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarOverviewComponentComponent } from './toolbar-overview.component';

describe('ToolbarOverviewComponentComponent', () => {
  let component: ToolbarOverviewComponentComponent;
  let fixture: ComponentFixture<ToolbarOverviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarOverviewComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarOverviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
