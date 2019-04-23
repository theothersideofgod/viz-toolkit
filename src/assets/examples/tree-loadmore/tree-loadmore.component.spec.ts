import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeLoadmoreComponentComponent } from './tree-loadmore.component';

describe('TreeLoadmoreComponentComponent', () => {
  let component: TreeLoadmoreComponentComponent;
  let fixture: ComponentFixture<TreeLoadmoreComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TreeLoadmoreComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeLoadmoreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
