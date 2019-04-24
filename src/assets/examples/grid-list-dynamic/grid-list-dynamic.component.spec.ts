import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListDynamicComponentComponent } from './grid-list-dynamic.component';

describe('GridListDynamicComponentComponent', () => {
  let component: GridListDynamicComponentComponent;
  let fixture: ComponentFixture<GridListDynamicComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GridListDynamicComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridListDynamicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
