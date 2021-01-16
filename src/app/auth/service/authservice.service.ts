import { Router } from '@angular/router';
import { PlayGroundUser } from './../../playgrounduser/userModel/playgrounduser.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserIdsAndEmails } from '../response/userid.email.response';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticatedUserResponse } from '../response/auth.user.reponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public playGroundUser = new BehaviorSubject<PlayGroundUser>(null);
  public authenticatedUser: PlayGroundUser;

  constructor(private httpClient: HttpClient, private router: Router) { }

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

  authHeaderOptions(userWebToken: string){
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

  registeredUserIdsAndEmails(){
    const postData = { userId: 'dummyValue' };
    return this.httpClient.post<UserIdsAndEmails>('http://localhost:8900/auth/registeredUserIdsAndEmails',
                                                    postData, this.genericHeaderOptions);
  }

  registerUser(postData){
    console.log('postData sent to authService is: ', postData);
    return this.httpClient.post<AuthenticatedUserResponse>('http://localhost:8900/auth/register',
                                                            postData, this.genericHeaderOptions)
                .pipe(tap( responseData => {
                  this.authenticatedPlayGroundUser(responseData);
                }));
  }

  private authenticatedPlayGroundUser(responseData){
    const registeredUser = new PlayGroundUser(responseData.userId, responseData.firstName,
      responseData.lastName, responseData.emailAddress, responseData.emailAddressValidated, responseData.webToken);
    this.playGroundUser.next(registeredUser);
    this.authenticatedUser = registeredUser;
    localStorage.setItem('authenticatedUser', JSON.stringify(this.authenticatedUser));
  }

  sendValidationEmail(postData, userWebToken: string) {
    const httpOptions = this.authHeaderOptions(userWebToken);
    return this.httpClient.post('http://localhost:8900/email/sendValidationEmail', postData, httpOptions);
  }

  sendConfirmationEmail(postUrl: string, postData){
    return this.httpClient.post<AuthenticatedUserResponse>(postUrl, postData, this.genericHeaderOptions)
                .pipe(tap( responseData => {
                  console.log('piped response from sendConfirmationEmail is: ', responseData);
                  this.authenticatedPlayGroundUser(responseData);
                }));
  }

  autoLogin() {
    const authenticatedUser: PlayGroundUser = JSON.parse(localStorage.getItem('authenticatedUser'));
    if (!authenticatedUser) {
      return;
    }
    this.authenticatedPlayGroundUser(authenticatedUser);
  }

  login(postData) {
    return this.httpClient.post<AuthenticatedUserResponse>('http://localhost:8900/auth/login', postData, this.genericHeaderOptions)
                .pipe(tap( responseData => {
                  console.log('piped response from login is: ', responseData);
                  this.authenticatedPlayGroundUser(responseData);
                }));
  }

  logout(){
    console.log('this.authenticatedUser is: ', this.authenticatedUser);
    const postData = { userId: this.authenticatedUser.userId };
    const httpOptions = this.authHeaderOptions(this.authenticatedUser.userWebToken);
    return this.httpClient.post('http://localhost:8900/auth/logout', postData, httpOptions);
  }

  handleError(arg0: string, postData: any): any {
    throw new Error('Method not implemented.');
  }
}
