import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventGuestsComponent } from './eventguests.component';

describe('EventGuestsComponent', () => {
  let component: EventGuestsComponent;
  let fixture: ComponentFixture<EventGuestsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventGuestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
