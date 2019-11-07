import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeItems1Component } from './serve-items1.component';

describe('ServeItems1Component', () => {
  let component: ServeItems1Component;
  let fixture: ComponentFixture<ServeItems1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServeItems1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeItems1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
