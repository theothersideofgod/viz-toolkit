import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBasicComponent } from './list-basic.component';
import { MatListModule, MatDividerModule, MatIconModule } from '@angular/material';

describe('ListBasicComponent', () => {
  let component: ListBasicComponent;
  let fixture: ComponentFixture<ListBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatListModule, MatDividerModule, MatIconModule],
      declarations: [ListBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
