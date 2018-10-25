import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpStatusPageComponent } from './http-status-page.component';
import { VizHttpStatusModule } from 'libs';
import { RouterTestingModule } from '@angular/router/testing';

describe('HttpStatusPageComponent', () => {
  let component: HttpStatusPageComponent;
  let fixture: ComponentFixture<HttpStatusPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpStatusPageComponent ],
      imports: [ VizHttpStatusModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpStatusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
