import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserIdsAndEmails } from '../../auth/response/userid.email.response';
import { AuthenticatedUserResponse } from '../../auth/response/auth.user.reponse';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {

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

  registeredUserIdsAndEmails(dummyUser: string){
    const postData = { userId: dummyUser }; // spring-cloud-gateway
    // return this.httpClient.post<UserIdsAndEmails>('http://spring-cloud-gateway:8900/auth/registeredUserIdsAndEmails',
    return this.httpClient.post<UserIdsAndEmails>('http://localhost:8900/auth/registeredUserIdsAndEmails',
                                                    postData, this.genericHeaderOptions);
  }

  registerUser(postData){
    return this.httpClient.post<AuthenticatedUserResponse>('http://localhost:8900/auth/register',
                                                            postData, this.genericHeaderOptions);
  }

  login(postData) {
    return this.httpClient.post<AuthenticatedUserResponse>('http://localhost:8900/auth/login',
                                                            postData, this.genericHeaderOptions);
  }

  logout(loggedInUserId: string, userWebToken: string){
    const postData = { userId: loggedInUserId };
    const httpOptions = this.authHeaderOptions(userWebToken);
    return this.httpClient.post('http://localhost:8900/auth/logout', postData, httpOptions);
  }

}
