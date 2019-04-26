import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarMultirowComponentComponent } from './toolbar-multirow.component';

describe('ToolbarMultirowComponentComponent', () => {
  let component: ToolbarMultirowComponentComponent;
  let fixture: ComponentFixture<ToolbarMultirowComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarMultirowComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarMultirowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
