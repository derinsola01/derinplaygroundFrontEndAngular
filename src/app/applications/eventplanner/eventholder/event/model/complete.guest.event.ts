import { UserEvent } from './userevent.model';
import { EventGuest } from './event.guest.model';
import { Location } from './location.model';

export class CompleteGuestEvent {
  eventDTO: UserEvent;
  locationDTO: Location;
  guestDTO: EventGuest;
  eventCreatorUserFirstName: string;
  eventCreatorUserLastName: string;

  constructor(
    eventDTO: UserEvent,
    locationDTO: Location,
    guestDTO: EventGuest,
    eventCreatorUserFirstName: string,
    eventCreatorUserLastName: string) {
    this.eventDTO = eventDTO;
    this.locationDTO = locationDTO;
    this.guestDTO = guestDTO;
    this.eventCreatorUserFirstName = eventCreatorUserFirstName;
    this.eventCreatorUserLastName = eventCreatorUserLastName;
  }
}
