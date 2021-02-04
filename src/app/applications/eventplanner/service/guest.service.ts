import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/service/auth.service';
import { GuestHttpService } from 'src/app/common/httpservices/guest.http.service';
import { Guest } from '../eventholder/eventinfo/eventguests/guestmodel/guest.model';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private loggedInUserId = this.authService.authenticatedUser.userId;
  private loggedInUserToken = this.authService.authenticatedUser.userWebToken;
  private userGuests: Guest[] = [];

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

}
