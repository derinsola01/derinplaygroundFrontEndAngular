import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventlocationloadingspinnerComponent } from './eventlocationloadingspinner.component';

describe('EventlocationloadingspinnerComponent', () => {
  let component: EventlocationloadingspinnerComponent;
  let fixture: ComponentFixture<EventlocationloadingspinnerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventlocationloadingspinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventlocationloadingspinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
