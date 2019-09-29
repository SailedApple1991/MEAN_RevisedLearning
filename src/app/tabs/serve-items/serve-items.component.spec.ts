import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeItemsComponent } from './serve-items.component';

describe('ServeItemsComponent', () => {
  let component: ServeItemsComponent;
  let fixture: ComponentFixture<ServeItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServeItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
