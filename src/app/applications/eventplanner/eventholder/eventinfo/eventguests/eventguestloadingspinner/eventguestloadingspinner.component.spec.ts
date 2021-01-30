import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventguestloadingspinnerComponent } from './eventguestloadingspinner.component';

describe('EventguestloadingspinnerComponent', () => {
  let component: EventguestloadingspinnerComponent;
  let fixture: ComponentFixture<EventguestloadingspinnerComponent>;

  beforeEach(async(() => {
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
