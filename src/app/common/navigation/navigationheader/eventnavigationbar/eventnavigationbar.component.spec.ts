import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventnavigationbarComponent } from './eventnavigationbar.component';

describe('EventnavigationbarComponent', () => {
  let component: EventnavigationbarComponent;
  let fixture: ComponentFixture<EventnavigationbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventnavigationbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventnavigationbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
