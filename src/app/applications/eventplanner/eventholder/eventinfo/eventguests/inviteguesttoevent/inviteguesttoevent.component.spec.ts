import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteGuestToEventComponent } from './inviteguesttoevent.component';

describe('InviteGuestToEventComponent', () => {
  let component: InviteGuestToEventComponent;
  let fixture: ComponentFixture<InviteGuestToEventComponent>;

  beforeEach(async(() => {
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
