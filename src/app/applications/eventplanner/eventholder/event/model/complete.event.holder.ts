import { UserEvent } from './userevent.model';
import { Guest } from './guest.model';
import { Location } from './location.model';

export class CompleteEvent {
  event: UserEvent;
  location: Location;
  guests: Guest[];

  constructor(event: UserEvent, location: Location, guests: Guest[]) {
    this.event = event;
    this.location = location;
    this.guests = guests;
  }
}
