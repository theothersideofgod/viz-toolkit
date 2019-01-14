import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreePartiallyLoadedComponentComponent } from './tree-partially-loaded.component';

describe('TreePartiallyLoadedComponentComponent', () => {
  let component: TreePartiallyLoadedComponentComponent;
  let fixture: ComponentFixture<TreePartiallyLoadedComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TreePartiallyLoadedComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreePartiallyLoadedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
