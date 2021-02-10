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
    return this.httpClient.post('http://localhost:8900/event/createUpdateGuest', postData, httpOptions);
  }

  getAllUserGuests(loggedInUserId: string, userWebToken: string) {
    const postData = {  userId: loggedInUserId };
    const httpOptions = this.authHeaderOptions(userWebToken);
    return this.httpClient.post('http://localhost:8900/event/userGuests', postData, httpOptions);
  }

  addGuestsToEvent(selectedGuestIds: number[], selectedEventId: number, loggedInUserId: string, userWebToken: string){
    const postData = {  userId: loggedInUserId,
                        guestIds: selectedGuestIds,
                        eventId: selectedEventId
    };
    const httpOptions = this.authHeaderOptions(userWebToken);
    return this.httpClient.post('http://localhost:8900/event/inviteGuestsToEvent', postData, httpOptions);
  }

  displayEventToGuest(guestDisplayUrl, guestEventToken){
    const postData = { guestPass: guestEventToken };
    console.log('guestDisplayUrl to be sent is: ', guestDisplayUrl);
    console.log('guestEventToken to be sent is: ', guestEventToken);
    return this.httpClient.post(guestDisplayUrl, postData, this.genericHeaderOptions);
  }

}
