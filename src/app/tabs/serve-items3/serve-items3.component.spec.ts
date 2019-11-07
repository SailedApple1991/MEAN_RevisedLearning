import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeItems3Component } from './serve-items3.component';

describe('ServeItems3Component', () => {
  let component: ServeItems3Component;
  let fixture: ComponentFixture<ServeItems3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServeItems3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeItems3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
