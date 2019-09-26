import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowNavComponent } from './row-nav.component';

describe('RowNavComponent', () => {
  let component: RowNavComponent;
  let fixture: ComponentFixture<RowNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
