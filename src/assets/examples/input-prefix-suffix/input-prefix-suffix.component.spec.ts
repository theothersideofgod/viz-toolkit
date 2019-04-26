import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPrefixSuffixComponentComponent } from './input-prefix-suffix.component';

describe('InputPrefixSuffixComponentComponent', () => {
  let component: InputPrefixSuffixComponentComponent;
  let fixture: ComponentFixture<InputPrefixSuffixComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputPrefixSuffixComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPrefixSuffixComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
