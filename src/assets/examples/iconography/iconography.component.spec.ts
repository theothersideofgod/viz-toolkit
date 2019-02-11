import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconographyComponentComponent } from './iconography.component';

describe('IconographyComponentComponent', () => {
  let component: IconographyComponentComponent;
  let fixture: ComponentFixture<IconographyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconographyComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconographyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
