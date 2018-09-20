import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarColorComponent } from './toolbar-color.component';
import { MatIconModule, MatToolbarModule } from '@angular/material';

describe('ToolbarColorComponent', () => {
  let component: ToolbarColorComponent;
  let fixture: ComponentFixture<ToolbarColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatToolbarModule, MatIconModule],
      declarations: [ToolbarColorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
