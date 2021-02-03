import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InviteGuestToEventComponent } from './inviteguesttoevent.component';

describe('InviteGuestToEventComponent', () => {
  let component: InviteGuestToEventComponent;
  let fixture: ComponentFixture<InviteGuestToEventComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteGuestToEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteGuestToEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
