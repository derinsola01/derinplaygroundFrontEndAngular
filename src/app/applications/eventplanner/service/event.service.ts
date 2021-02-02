import { Guest } from './../eventholder/event/model/guest.model';
import { Location } from './../eventholder/event/model/location.model';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/service/auth.service';
import { EventHttpService } from 'src/app/common/httpservices/event.http.service';
import { CompleteEvent } from '../eventholder/event/model/complete.event.holder';
import { EventResponseModel } from '../eventholder/event/model/event.response.model';
import { UserEvent } from '../eventholder/event/model/userevent.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private loggedInUserId = this.authService.authenticatedUser.userId;
  private loggedInUserToken = this.authService.authenticatedUser.userWebToken;
  // allUserEvents: EventResponseModel[] = [];
  allCompleteEvents: Array<CompleteEvent> = [];
  selectedUserEvent: UserEvent;
  allUserEventsMap: Map<number, CompleteEvent> = new Map<number, CompleteEvent>();

  constructor(private eventHttpService: EventHttpService, private authService: AuthService) { }

  getCompleteEvents(){
    return this.eventHttpService.getAllUserEvents(this.loggedInUserId, this.loggedInUserToken)
      .pipe(tap( (responseData: EventResponseModel) => {
        if (responseData) {
          console.log('responseData returned in retrieveUserDiary is: ', responseData.allUserEvents);
          this.populateAllUserEvents(responseData.allUserEvents);
          // this.populateEventResponseModel(responseData);
        }
      }));
  }

  populateLocation(data: Location) {
    let location = null;
    if (data) {
      location = new Location(data.eventLocationId, data.eventLocationName,
                              data.eventLocationAddress, data.eventLocationState,
                              data.eventLocationZipCode, data.eventLocationCountry);
    }
    return location;
  }

  populateGuests(data: Guest[]) {
    const guests = [];
    if (data) {
      data.forEach(element => {
        const guest = new Guest(element.eventGuestId, element.eventGuestResponse,
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
      // this.listEventElements.push(event);
    }
    return event;
  }

  populateAllUserEvents(data: CompleteEvent[]) {
    data.forEach(element => {
      const location = this.populateLocation(element.locationDTO);
      const guests = this.populateGuests(element.guestDTO);
      const event = this.populateEvent(element.eventDTO);
      const eventDeets = new CompleteEvent(event, location, guests);
      this.allUserEventsMap.set(event.eventId, eventDeets);
      this.allCompleteEvents.push(eventDeets);
    });
    this.populateCompleteEventContinuously(this.allCompleteEvents);
  }

  get userEvents() {
    return this.allCompleteEvents;
  }

  selectedEventByUser(eventSelectedForView: UserEvent) {
    console.log('eventSelectedForView is: ', eventSelectedForView);
    this.selectedUserEvent = eventSelectedForView;
  }

  get selectedEvent() {
    return this.selectedUserEvent;
  }

  private populateCompleteEventContinuously(data: CompleteEvent[]) { // : EventResponseModel
    // const userEvents = new EventResponseModel(data.httpStatusCode, data.responseMessage, data.userId, data.allUserEvents);
    // this.allCompleteEvents = userEvents;
    console.log('data inside populateCompleteEventContinuously holds: ', data);
    localStorage.setItem('allUserEvents', JSON.stringify(data));
  }

  createNewEvent(formData) {
    return this.eventHttpService.createNewEvent(formData, this.loggedInUserId, this.loggedInUserToken)
      .pipe(tap( responseData => {
        if (responseData) {
          console.log('responseData for newly created event is: ', responseData);
          // this.populateUserEvents(responseData);
        }
      }));
  }

  createNewGuest(formData: Guest[]) {
    return this.eventHttpService.createNewGuest(formData, this.loggedInUserId, this.loggedInUserToken)
      .pipe(tap( responseData => {
        if (responseData) {
          console.log('responseData for newly created event is: ', responseData);
          // this.populateUserEvents(responseData);
        }
      }));
  }

  createNewLocation(formData) {
    return this.eventHttpService.createNewLocation(formData, this.loggedInUserId, this.loggedInUserToken)
      .pipe(tap( responseData => {
        if (responseData) {
          console.log('responseData for newly created event is: ', responseData);
          // this.populateUserEvents(responseData);
        }
      }));
  }

}
