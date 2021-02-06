import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/service/auth.service';
import { LocationHttpService } from 'src/app/common/httpservices/location.http.service';
import { Location } from './../eventholder/event/model/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private loggedInUserId = this.authService.authenticatedUser.userId;
  private loggedInUserToken = this.authService.authenticatedUser.userWebToken;
  private userlocations: Location[] = [];

  constructor(private locationHttpService: LocationHttpService, private authService: AuthService) { }

  getAllUserLocations() {
    return this.locationHttpService.getAllUserLocations(this.loggedInUserId, this.loggedInUserToken)
      .pipe(tap( (responseData: any) => {
        if (responseData) {
          this.userlocations = [];
          const locationList = responseData.userLocations;
          locationList.forEach(element => {
            this.populateLocationList(element);
          });
        }
      }));
  }

  createNewLocation(formData) {
    return this.locationHttpService.createNewLocation(formData, this.loggedInUserId, this.loggedInUserToken)
      .pipe(tap( responseData => {
        if (responseData) {
          console.log('responseData for newly created event is: ', responseData);
        }
      }));
  }

  populateLocationList(data: any) {
    console.log('Location data is: ', data);
    const location = new Location(data.eventLocationId, data.eventLocationName,
                              data.eventLocationAddress, data.eventLocationState,
                              data.eventLocationZipCode, data.eventLocationCountry);
    this.userlocations.push(location);
  }

  triggerUserLocations() {
    if (!this.userlocations.length) {
      this.getAllUserLocations().subscribe();
    }
  }

  get completeUserLocationList() {
    console.log('this.userlocations holds: ', this.userlocations);
    return this.userlocations;
  }

  addLocationToEvent(selectedLocation: number, selectedEventId: number){
    return this.locationHttpService.addLocationToEvent(selectedLocation, selectedEventId, this.loggedInUserId, this.loggedInUserToken)
                  .pipe(tap( responseData => {
                    if (responseData) {
                      console.log('responseData after adding location to event is: ', responseData);
                    }
                  }));
  }
}
