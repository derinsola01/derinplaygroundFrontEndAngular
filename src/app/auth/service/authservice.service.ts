import { LoginResponse } from './../response/login.response';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, switchMap } from 'rxjs/operators';
import { RegistrationResponse } from '../response/register.response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginResponse: LoginResponse;
  private registrationResponse: RegistrationResponse;

  constructor(private httpClient: HttpClient) { }

  get loginResponseHolder(){
    return this.loginResponse;
  }

  get headerOptions(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': ['POST', 'GET', 'OPTIONS'],
        'Access-Control-Allow-Headers': 'Content-Type, application/json'
      })
    };
    return httpOptions;
  }

  validateUserId(userId: string){
    const postData = { 'userId': userId };
    return this.httpClient.post('http://localhost:8900/auth/getUserIds', postData, this.headerOptions)
            .subscribe(responseData => {
              console.log('responseData of validateUserId is: ', responseData);
            });
  }

  registerUser(postData){
    console.log('postData sent to authService is: ', postData);

    const res = this.httpClient.post('http://localhost:8900/auth/register', postData, this.headerOptions)
            .subscribe((responseData: RegistrationResponse) => {
              console.log('responseData is: ', responseData);
              this.registrationResponse = responseData;

              const emailValidator = {
                userId: this.registrationResponse.userId,
                emailAddress: this.registrationResponse.emailAddress
              };
              const httpOptions = {
                headers: new HttpHeaders({
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Methods': ['POST', 'GET', 'OPTIONS'],
                  'Access-Control-Allow-Headers': 'Content-Type, application/json',
                  Authorization: this.registrationResponse.webToken
                })
              };
              // HttpHeaders header = new HttpHeaders('Authorization': this.loginResponse.webToken);
              // this.headerOptions.headers.keys().append('Authorization', this.loginResponse.webToken);
              // console.log('this.headerOptions.headers now holds: ', this.headerOptions.headers.keys());
              // console.log('httpOptions now holds: ', httpOptions.headers.keys());
              // console.log('httpOptions now holds: ', httpOptions.headers.get('Authorization'));
              this.httpClient.post('http://localhost:8900/email/sendValidationEmail', emailValidator, httpOptions)
                .subscribe(response => {
                  console.log('email response is: ', response);
                });

            });

    // const emailHeader = new HttpHeader('Access-Control-Allow-Origin': '*',
    // this.headerOptions.headers.append('Authorization': );
    // const emailValidationData = {
    //   userId: postData.userId,
    //   emailAddress: postData.emailAddress
    // };
    // this.sendValidationEmail(emailValidationData);
  }

  login(postData) {
    const response = this.httpClient.post('http://localhost:8900/auth/login', postData, this.headerOptions)
    // .toPromise();
    // console.log('response is: ', response);
    // return response;
        // .subscribe((responseData: LoginResponse ) => {
        //   console.log('responseData is: ', responseData);
        //   this.loginResponse = responseData;
        //   this.checkoutLoginResponse(responseData);
        //   this.update();
        // });
            .subscribe((responseData: LoginResponse ) => {
              console.log('responseData is: ', responseData);
              this.loginResponse = responseData;
              this.checkoutLoginResponse(responseData);
            });
    // console.log('this.loginResponse before setTimeout() is: ', this.loginResponse );
    // setTimeout(() => { }, 120000);
    // console.log('this.loginResponse after setTimeout() is: ', this.loginResponse );
  }

  update(){
    console.log('this.loginResponse inside update is: ', this.loginResponse);
  }

  checkoutLoginResponse(responseData){
    console.log('responseData inside method holds: ', responseData);
  }

  logout(postData){
    this.httpClient.post('http://localhost:8900/auth/logout', postData, this.headerOptions)
            .subscribe(responseData => {
              console.log('responseData is: ', responseData);
            });
  }

  sendValidationEmail(emailValidationData){
    this.httpClient.post('http://localhost:8900/email/sendValidationEmail', emailValidationData, this.headerOptions)
            .subscribe(responseData => {
              console.log('responseData is: ', responseData);
            });
  }

  handleError(arg0: string, postData: any): any {
    throw new Error('Method not implemented.');
  }
}
