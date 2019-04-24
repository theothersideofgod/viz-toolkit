import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSectionsComponentComponent } from './list-sections.component';

describe('ListSectionsComponentComponent', () => {
  let component: ListSectionsComponentComponent;
  let fixture: ComponentFixture<ListSectionsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListSectionsComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSectionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
