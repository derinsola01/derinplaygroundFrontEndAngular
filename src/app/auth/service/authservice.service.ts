import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

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

    let resHolder = {};
    const res = this.httpClient.post('http://localhost:8900/auth/register', postData, this.headerOptions)
            .subscribe(responseData => {
              console.log('responseData is: ', responseData);
              resHolder = responseData;
            });

    // const emailHeader = new HttpHeader('Access-Control-Allow-Origin': '*',
    // this.headerOptions.headers.append('Authorization': );
    const emailValidationData = {
      userId: postData.userId,
      emailAddress: postData.emailAddress
    };
    this.sendValidationEmail(emailValidationData);
  }

  login(postData){
    this.httpClient.post('http://localhost:8900/auth/login', postData, this.headerOptions)
            .subscribe(responseData => {
              console.log('responseData is: ', responseData);
            });
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
