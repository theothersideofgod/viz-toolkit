import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNodividerComponent } from './list-nodivider.component';

describe('ListNodividerComponent', () => {
  let component: ListNodividerComponent;
  let fixture: ComponentFixture<ListNodividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListNodividerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNodividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
