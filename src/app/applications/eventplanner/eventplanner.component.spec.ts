import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventPlannerComponent } from './eventplanner.component';

describe('EventPlannerComponent', () => {
  let component: EventPlannerComponent;
  let fixture: ComponentFixture<EventPlannerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPlannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
