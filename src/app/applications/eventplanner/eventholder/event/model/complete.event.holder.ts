import { UserEvent } from './userevent.model';
import { Guest } from './guest.model';
import { Location } from './location.model';

export class CompleteEvent {
  eventDTO: UserEvent;
  locationDTO: Location;
  guestDTO: Guest[];

  constructor(eventDTO: UserEvent, locationDTO: Location, guestDTO: Guest[]) {
    this.eventDTO = eventDTO;
    this.locationDTO = locationDTO;
    this.guestDTO = guestDTO;
  }
}
