import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventplannerComponent } from './eventplanner.component';

describe('EventplannerComponent', () => {
  let component: EventplannerComponent;
  let fixture: ComponentFixture<EventplannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventplannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventplannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
