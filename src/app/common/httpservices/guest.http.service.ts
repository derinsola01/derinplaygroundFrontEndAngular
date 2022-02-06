import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guest } from 'src/app/applications/eventplanner/eventholder/eventinfo/eventguests/guestmodel/guest.model';

@Injectable({
  providedIn: 'root'
})
export class GuestHttpService {

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

  createNewGuest(formData: Guest[], loggedInUserId: string, userWebToken: string){
    const postData = {  userId: loggedInUserId, createGuestRequests: formData };
    const httpOptions = this.authHeaderOptions(userWebToken);
    return this.httpClient.post('http://spring-cloud-gateway:8900/event/createUpdateGuest', postData, httpOptions);
  }

  getAllUserGuests(loggedInUserId: string, userWebToken: string) {
    const postData = {  userId: loggedInUserId };
    const httpOptions = this.authHeaderOptions(userWebToken);
    return this.httpClient.post('http://localhost:8900/event/userGuests', postData, httpOptions);
  }

  addGuestsToEvent(selectedGuestIds: number[], selectedEventId: number, loggedInUserId: string, userWebToken: string){
    const postData = {  userId: loggedInUserId, guestIds: selectedGuestIds, eventId: selectedEventId };
    const httpOptions = this.authHeaderOptions(userWebToken);
    return this.httpClient.post('http://localhost:8900/event/inviteGuestsToEvent', postData, httpOptions);
  }

  displayEventToGuest(eventToken: string, guestEventToken: string){
    const postData = { guestPass: guestEventToken };
    return this.httpClient.post('http://localhost:8900/event/' + eventToken, postData, this.genericHeaderOptions);
  }

  guestResponseToEvent(guestEventToken: string, guestResponseToEvent: boolean){
    const postData = { guestPass: guestEventToken, guestResponse: guestResponseToEvent };
    console.log('postData to be sent is: ', postData);
    return this.httpClient.post('http://localhost:8900/event/guestResponseToEvent', postData, this.genericHeaderOptions);
  }

}
