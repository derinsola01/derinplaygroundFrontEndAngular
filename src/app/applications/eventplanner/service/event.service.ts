import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/service/auth.service';
import { EventHttpService } from 'src/app/common/httpservices/event.http.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private loggedInUserId = this.authService.authenticatedUser.userId;
  private loggedInUserToken = this.authService.authenticatedUser.userWebToken;

  constructor(private eventHttpService: EventHttpService, private authService: AuthService) { }

  getCompleteEvents(){
    console.log('loggedInUser is: ', this.loggedInUserId);
    console.log('userWebToken is: ', this.authService.authenticatedUser.userWebToken);
    return this.eventHttpService.getAllUserEvents(this.loggedInUserId, this.loggedInUserToken)
      .pipe(tap( responseData => {
        if (responseData) {
          console.log('responseData returned in retrieveUserDiary is: ', responseData);
          // this.populateUserEvents(responseData);
        }
      }));
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

  createNewGuest(formData) {
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

  // private populateUserEvents(responseData) {
    // const diaryEntries = new UserDiary(responseData.userId, responseData.dairyEntries);
    // this.userDiary = diaryEntries;
    // localStorage.setItem('userDiary', JSON.stringify(this.userDiary));
  // }
}
