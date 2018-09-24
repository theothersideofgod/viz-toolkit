import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodataBasicComponent } from './nodata-basic.component';
import { VizNodataModule } from 'libs';

describe('NodataBasicComponent', () => {
  let component: NodataBasicComponent;
  let fixture: ComponentFixture<NodataBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VizNodataModule],
      declarations: [NodataBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodataBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
