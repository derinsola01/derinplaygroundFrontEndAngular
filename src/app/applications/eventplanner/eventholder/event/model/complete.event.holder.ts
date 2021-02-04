import { UserEvent } from './userevent.model';
import { EventGuest } from './event.guest.model';
import { Location } from './location.model';

export class CompleteEvent {
  eventDTO: UserEvent;
  locationDTO: Location;
  guestDTO: EventGuest[];

  constructor(eventDTO: UserEvent, locationDTO: Location, guestDTO: EventGuest[]) {
    this.eventDTO = eventDTO;
    this.locationDTO = locationDTO;
    this.guestDTO = guestDTO;
  }
}
