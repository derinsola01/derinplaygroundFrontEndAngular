import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventGuestsComponent } from './eventguests.component';

describe('EventGuestsComponent', () => {
  let component: EventGuestsComponent;
  let fixture: ComponentFixture<EventGuestsComponent>;

  beforeEach(async(() => {
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
