import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationHttpService {

  constructor(private httpClient: HttpClient) { }

  get genericHeaderOptions(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': ['POST', 'GET', 'OPTIONS'],
        'Access-Control-Allow-Headers': 'Content-Type, application/json'
      })
    };
    return httpOptions;
  }

  private authHeaderOptions(userWebToken: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': ['POST', 'GET', 'OPTIONS'],
        'Access-Control-Allow-Headers': 'Content-Type, application/json',
        Authorization: userWebToken
      })
    };
    return httpOptions;
  }

  createNewLocation(formData, loggedInUserId: string, userWebToken: string){
    const postData = {  userId: loggedInUserId,
                        locationName: formData.locationName,
                        locationAddress: formData.streetAddress,
                        locationCity: formData.city,
                        locationState: formData.state,
                        locationZipCode: formData.zipcode,
                        locationCountry: formData.country };
    const httpOptions = this.authHeaderOptions(userWebToken);
    return this.httpClient.post('http://localhost:8900/event/createUpdateLocation', postData, httpOptions);
  }

  getAllUserLocations(loggedInUserId: string, userWebToken: string) {
    const postData = {  userId: loggedInUserId };
    const httpOptions = this.authHeaderOptions(userWebToken);
    return this.httpClient.post('http://localhost:8900/event/userLocations', postData, httpOptions);
  }

  addLocationToEvent(selectedLocation: number, selectedEventId: number, loggedInUserId: string, userWebToken: string){
    const postData = {  userId: loggedInUserId,
                        eventId: selectedEventId,
                        locationId: selectedLocation
                      };
    const httpOptions = this.authHeaderOptions(userWebToken);
    return this.httpClient.post('http://localhost:8900/event/addLocationToEvent', postData, httpOptions);
  }

}
