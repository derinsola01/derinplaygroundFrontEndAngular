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
    const postArr = {};
    const postData = {  userId: loggedInUserId, createGuestRequests: formData };
    const httpOptions = this.authHeaderOptions(userWebToken);
    console.log('createNewGuest postArr is: ', JSON.stringify(postArr));
    console.log('createNewGuest postData is: ', postData);
    console.log('createNewGuest httpOptions is: ', httpOptions);
    return this.httpClient.post('http://localhost:8900/event/createUpdateGuest', postData, httpOptions);
  }

  getAllUserGuests(loggedInUserId: string, userWebToken: string) {
    const postData = {  userId: loggedInUserId };
    const httpOptions = this.authHeaderOptions(userWebToken);
    return this.httpClient.post('http://localhost:8900/event/userGuests', postData, httpOptions);
  }

}
