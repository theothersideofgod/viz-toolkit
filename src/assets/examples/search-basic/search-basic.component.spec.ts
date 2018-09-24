import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBasicComponent } from './search-basic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VizSearchModule } from 'libs';
import { MatSelectModule } from '@angular/material';

describe('SearchBasicComponent', () => {
  let component: SearchBasicComponent;
  let fixture: ComponentFixture<SearchBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VizSearchModule, BrowserAnimationsModule],
      declarations: [SearchBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
