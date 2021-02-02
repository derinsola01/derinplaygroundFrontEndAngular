import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventguestloadingspinnerComponent } from './eventguestloadingspinner.component';

describe('EventguestloadingspinnerComponent', () => {
  let component: EventguestloadingspinnerComponent;
  let fixture: ComponentFixture<EventguestloadingspinnerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventguestloadingspinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventguestloadingspinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
