import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorConfigurableComponentComponent } from './paginator-configurable.component';

describe('PaginatorConfigurableComponentComponent', () => {
  let component: PaginatorConfigurableComponentComponent;
  let fixture: ComponentFixture<PaginatorConfigurableComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginatorConfigurableComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorConfigurableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
