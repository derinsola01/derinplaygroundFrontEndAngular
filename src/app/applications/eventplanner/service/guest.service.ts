import { EventGuest } from './../eventholder/event/model/event.guest.model';
import { Location } from './../eventholder/event/model/location.model';
import { UserEvent } from './../eventholder/event/model/userevent.model';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/service/auth.service';
import { GuestHttpService } from 'src/app/common/httpservices/guest.http.service';
import { CompleteGuestEvent } from '../eventholder/event/model/complete.guest.event';
import { Guest } from '../eventholder/eventinfo/eventguests/guestmodel/guest.model';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private loggedInUserId = (this.authService.playGroundUser.value) ? this.authService.authenticatedUser.userId : '';
  private loggedInUserToken =  (this.authService.playGroundUser.value) ? this.authService.authenticatedUser.userWebToken : '';
  private userGuests: Guest[] = [];
  public completGuestEvent: CompleteGuestEvent;
  public completeLocationAddress: string;

  constructor(private guestHttpService: GuestHttpService, private authService: AuthService) { }

  createNewGuest(formData: Guest[]) {
    return this.guestHttpService.createNewGuest(formData, this.loggedInUserId, this.loggedInUserToken)
                  .pipe(tap( responseData => {
                    if (responseData) {
                      console.log('responseData for newly created event is: ', responseData);
                    }
                  }));
  }

  populateGuest(guest: any) {
    const guestHolder = new Guest(guest.eventGuestId, guest.eventGuestFirstName, guest.eventGuestLastName, guest.eventGuestEmailAddress);
    this.userGuests.push(guestHolder);
  }

  triggerUserGuests() {
    if (!this.userGuests.length) {
      this.getAllUserGuests().subscribe();
    }
  }

  get completeUserGuestList() {
    return this.userGuests;
  }

  getAllUserGuests() {
    return this.guestHttpService.getAllUserGuests(this.loggedInUserId, this.loggedInUserToken)
                  .pipe(tap( (responseData: any) => {
                    if (responseData) {
                      this.userGuests = [];
                      const guestList = responseData.userGuests;
                      guestList.forEach(element => {
                        this.populateGuest(element);
                      });
                    }
                  }));
  }

  computeEventAddressForDisplay(location: Location) {
    const completeAddress = location.locationAddress + ' ' + location.locationState
        + ' ' + location.locationZipCode + ' ' + location.locationCountry;
    console.log('completeAddress holds: ', completeAddress);
    return this.completeLocationAddress = completeAddress;
  }

  addGuestsToEvent(guestIds: number[], eventId: number){
    return this.guestHttpService.addGuestsToEvent(guestIds, eventId, this.loggedInUserId, this.loggedInUserToken);
  }

  displayEventToGuest(eventToken, guestEventToken){
    console.log('this.authService.playGroundUser.value holds: ', this.authService.playGroundUser.value);
    return this.guestHttpService.displayEventToGuest(eventToken, guestEventToken)
                  .pipe(tap( (responseData: CompleteGuestEvent) => {
                    console.log('responseData from DisplayGuest is: ', responseData);
                    this.populateGuestEventInfo(responseData);
                  }));
  }

  populateGuestEventInfo(responseData: CompleteGuestEvent) {
    const guestDTO = responseData.guestDTO;
    const locationDTO = responseData.locationDTO;
    const eventDTO = responseData.eventDTO;
    const guest = this.populateGuestDetails(guestDTO);
    const location = this.populateGuestLocation(locationDTO);
    const event = this.populateGuestEvent(eventDTO);
    console.log('responseData.eventCreatorFirstName is: ', responseData);
    const guestEvent = new CompleteGuestEvent(event, location, guest,
                              responseData.eventCreatorUserFirstName, responseData.eventCreatorUserLastName);
    this.computeEventAddressForDisplay(location);
    this.completGuestEvent = guestEvent;
  }

  private populateGuestEvent(event) {
    console.log('event local Date is: ', event.eventStartTime.toLocaleDateString);
    console.log('event local Time is: ', event.eventStartTime.toLocaleTimeString);
    return new UserEvent(event.eventId, event.eventName, event.eventDescription,
      event.eventStartTime, event.eventEndTime);
  }

  private populateGuestLocation(location) {
    return new Location(location.eventLocationId, location.eventLocationName, location.eventLocationAddress,
      location.eventLocationState, location.eventLocationZipCode, location.eventLocationCountry);
  }

  private populateGuestDetails(guest) {
    return new EventGuest(
      guest.eventGuestId, guest.eventGuestResponse, guest.eventGuestFirstName,
      guest.eventGuestLastName, guest.eventGuestEmailAddress, guest.eventGuestResponseDate,
      guest.eventGuestRequestDate, guest.eventGuestToken
    );
  }

  guestResponseToEvent(guestPassToken: string, guestResponse: boolean){
    return this.guestHttpService.guestResponseToEvent(guestPassToken, guestResponse)
                  .pipe(tap( (responseData: CompleteGuestEvent) => {
                    this.populateGuestEventInfo(responseData);
                  }));
  }

}
