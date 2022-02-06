import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticatedUserResponse } from 'src/app/auth/response/auth.user.reponse';

@Injectable({
  providedIn: 'root'
})
export class EmailHttpService {

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

  notifyGuestsOfEvents(invitedGuestTokens){
    const postData = { emailTokens: invitedGuestTokens };
    return this.httpClient.post('http://localhost:8900/email/sendEventInvitation', postData, this.genericHeaderOptions);
  }

  sendValidationEmail(postData, userWebToken: string) {
    const httpOptions = this.authHeaderOptions(userWebToken);
    console.log('user webToken is: ', userWebToken);
    return this.httpClient.post('http://localhost:8900/email/sendValidationEmail', postData, httpOptions);
  }

  sendConfirmationEmail(emailToken: string, postData){
    const emailURL = 'http://localhost:8900/email/' + emailToken;
    console.log('emailURL is: ' + emailURL);
    return this.httpClient.post<AuthenticatedUserResponse>('http://localhost:8900/email/' + emailToken,
                                                            postData, this.genericHeaderOptions);
  }

}
