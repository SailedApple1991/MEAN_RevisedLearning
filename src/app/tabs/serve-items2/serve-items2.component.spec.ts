import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeItems2Component } from './serve-items2.component';

describe('ServeItems2Component', () => {
  let component: ServeItems2Component;
  let fixture: ComponentFixture<ServeItems2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServeItems2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeItems2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
