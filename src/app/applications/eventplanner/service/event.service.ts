import { EventGuest } from '../eventholder/event/model/event.guest.model';
import { Location } from './../eventholder/event/model/location.model';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/service/auth.service';
import { EventHttpService } from 'src/app/common/httpservices/event.http.service';
import { CompleteEvent } from '../eventholder/event/model/complete.event.holder';
import { EventResponseModel } from '../eventholder/event/model/event.response.model';
import { UserEvent } from '../eventholder/event/model/userevent.model';
import { GuestService } from './guest.service';
import { LocationService } from './location.service';
import { EmailHttpService } from 'src/app/common/httpservices/email.http.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private loggedInUserId = this.authService.authenticatedUser.userId;
  private loggedInUserToken = this.authService.authenticatedUser.userWebToken;
  allCompleteEvents: Array<CompleteEvent> = [];
  selectedUserEvent: UserEvent;
  allUserEventsMap: Map<number, CompleteEvent> = new Map<number, CompleteEvent>();
  private selectedCompleteEvent: CompleteEvent;
  completeUserGuestList = this.guestService.completeUserGuestList;
  completeUserLocationList = this.locationService.completeUserLocationList;

  constructor(private eventHttpService: EventHttpService,
              private guestService: GuestService,
              private locationService: LocationService,
              private emailHttpService: EmailHttpService,
              private authService: AuthService) { }

  get locationProvider() {
    return this.locationService;
  }

  get guestProvider() {
    return this.guestService;
  }

  getCompleteEvents(){
    return this.eventHttpService.getAllUserEvents(this.loggedInUserId, this.loggedInUserToken)
      .pipe(tap( (responseData: EventResponseModel) => {
        if (responseData) {
          console.log('responseData returned in getCompleteEvents is: ', responseData.allUserEvents);
          this.populateAllUserEvents(responseData.allUserEvents);
        }
      }));
  }

  notifyGuestsOfEvents(invitedGuestTokens: string[]){
    return this.emailHttpService.notifyGuestsOfEvents(invitedGuestTokens)
                  .pipe(tap( responseData => {
                    if (responseData) {
                      console.log('responseData after notifying users of event is: ', responseData);
                    }
                  }));
  }

  populateLocation(data: any) {
    let location = null;
    if (data) {
      location = new Location(data.eventLocationId, data.eventLocationName,
                              data.eventLocationAddress, data.eventLocationState,
                              data.eventLocationZipCode, data.eventLocationCountry);
    }
    return location;
  }

  populateEventGuests(data: EventGuest[]) {
    const guests = [];
    if (data) {
      data.forEach(element => {
        const guest = new EventGuest(element.eventGuestId, element.eventGuestResponse,
                                element.eventGuestFirstName, element.eventGuestLastName,
                                element.eventGuestEmailAddress, element.eventGuestResponseDate, element.eventGuestRequestDate);
        guests.push(guest);
      });
    }
    return guests;
  }

  populateEvent(data: UserEvent) {
    let event = null;
    if (data) {
      event = new UserEvent(data.eventId, data.eventName, data.eventDescription, data.eventStartTime, data.eventEndTime);
    }
    return event;
  }

  populateAllUserEvents(data: CompleteEvent[]) {
    data.forEach(element => {
      const location = this.populateLocation(element.locationDTO);
      const guests = this.populateEventGuests(element.guestDTO);
      const event = this.populateEvent(element.eventDTO);
      const eventDeets = new CompleteEvent(event, location, guests);
      this.allUserEventsMap.set(event.eventId, eventDeets);
      this.allCompleteEvents.push(eventDeets);
    });
  }

  get userEvents() {
    return this.allCompleteEvents;
  }

  selectedEventByUser(eventSelectedForView: UserEvent) {
    console.log('eventSelectedForView is: ', eventSelectedForView);
    this.selectedUserEvent = eventSelectedForView;
    this.selectedCompleteEvent = this.allUserEventsMap.get(eventSelectedForView.eventId);
  }

  get selectedEvent() {
    return this.selectedCompleteEvent;
  }

  createNewEvent(formData) {
      return this.eventHttpService.createNewEvent(formData, this.loggedInUserId, this.loggedInUserToken);
  }

}
