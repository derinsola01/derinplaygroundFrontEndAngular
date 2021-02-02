import { Guest } from './../../applications/eventplanner/eventholder/event/model/guest.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserEventsResponse } from 'src/app/applications/eventplanner/eventholder/event/response/user.events.response';
import { CompleteEvent } from 'src/app/applications/eventplanner/eventholder/event/model/complete.event.holder';
import { EventResponseModel } from 'src/app/applications/eventplanner/eventholder/event/model/event.response.model';

@Injectable({
  providedIn: 'root'
})
export class EventHttpService {

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

  getAllUserEvents(loggedInUserId: string, userWebToken: string) { // UserEventsResponse
    const postData = { userId: loggedInUserId };
    const httpOptions = this.authHeaderOptions(userWebToken);
    return this.httpClient.post<EventResponseModel>('http://localhost:8900/event/userEvents', postData, httpOptions);
  }

  createNewEvent(formData, loggedInUserId: string, userWebToken: string){
    const postData = { userId: loggedInUserId,
                        eventName: formData.eventName,
                        eventDescription: formData.eventDescription,
                        eventStartTime: formData.eventStartTime,
                        eventEndTime: formData.eventEndTime };
    const httpOptions = this.authHeaderOptions(userWebToken);
    console.log('createNewEvent postData is: ', postData);
    console.log('createNewEvent httpOptions is: ', httpOptions);
    return this.httpClient.post('http://localhost:8900/event/createUpdateEvent', postData, httpOptions);
  }

  createNewGuest(formData: Guest[], loggedInUserId: string, userWebToken: string){
    const postArr = {};
    const postData = {  userId: loggedInUserId, createGuestRequests: formData };
    const httpOptions = this.authHeaderOptions(userWebToken);
    console.log('createNewGuest postArr is: ', JSON.stringify(postArr));
    console.log('createNewGuest postData is: ', postData);
    console.log('createNewGuest httpOptions is: ', httpOptions);
    return this.httpClient.post('http://localhost:8900/event/createUpdateGuest', postData, httpOptions);
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
    console.log('createNewLocation postData is: ', postData);
    console.log('createNewLocation httpOptions is: ', httpOptions);
    return this.httpClient.post('http://localhost:8900/event/createUpdateLocation', postData, httpOptions);
  }

}
