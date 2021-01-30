import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserEventsResponse } from 'src/app/applications/eventplanner/eventholder/event/response/user.events.response';

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

  getAllUserEvents(loggedInUserId: string, userWebToken: string) {
    const postData = { userId: loggedInUserId };
    const httpOptions = this.authHeaderOptions(userWebToken);
    return this.httpClient.post<UserEventsResponse>('http://localhost:8900/event/userEvents', postData, httpOptions);
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

  createNewGuest(formData, loggedInUserId: string, userWebToken: string){
    const postArr = {};
    const postDataHolder = {  userId: loggedInUserId,
                              createGuestRequests: formData
                         };
                        //  guestFirstName: formData.guestFirstName,
                        // guestLastName: formData.guestLastName,
                        // guestEmailAddress: formData.guestEmailAddress
    // postArr.push(postDataHolder);
    const postData = JSON.stringify(postArr);
    const httpOptions = this.authHeaderOptions(userWebToken);
    // this.arrayConversion();
    console.log('createNewGuest postArr is: ', JSON.stringify(postArr));
    console.log('createNewGuest postData is: ', postData);
    console.log('createNewGuest httpOptions is: ', httpOptions);
    return this.httpClient.post('http://localhost:8900/event/createUpdateGuest', postData, httpOptions);
  }

  // arrayConversion(){
  //   const empArray = [{
  //       id: '1',
  //       name: 'kiran'
  //     },
  //     {
  //       id: '2',
  //       name: 'john'
  //     },
  //     {
  //       id: '3',
  //       name: 'Frank'
  //     },
  //   ];

  //   const jsonObject = {};
  //   empArray.forEach(item => [item.id] = item.name);
  //   const json = JSON.stringify(jsonObject);
  //   console.log(empArray);
  //   console.log(json);
  // }

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
