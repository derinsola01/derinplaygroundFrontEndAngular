import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLoadingSpinnerComponent } from './eventloadingspinner.component';

describe('EventLoadingSpinnerComponent', () => {
  let component: EventLoadingSpinnerComponent;
  let fixture: ComponentFixture<EventLoadingSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventLoadingSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
