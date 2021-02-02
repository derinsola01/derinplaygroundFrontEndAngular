import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListEventsComponent } from './listevents.component';

describe('ListEventsComponent', () => {
  let component: ListEventsComponent;
  let fixture: ComponentFixture<ListEventsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
