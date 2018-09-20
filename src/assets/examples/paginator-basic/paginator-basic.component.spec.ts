import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorBasicComponent } from './paginator-basic.component';
import { MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PaginatorBasicComponent', () => {
  let component: PaginatorBasicComponent;
  let fixture: ComponentFixture<PaginatorBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatPaginatorModule, BrowserAnimationsModule],
      declarations: [PaginatorBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
