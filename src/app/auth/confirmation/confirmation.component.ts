import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatedUserResponse } from '../response/auth.user.reponse';
import { AuthService } from '../service/authservice.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  private isLoading = false;
  private errorMessage: string = null;

  constructor(private router: Router, private authService: AuthService) {}

  // get headerOptions(){
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Methods': ['POST', 'GET', 'OPTIONS'],
  //       'Access-Control-Allow-Headers': 'Content-Type, application/json'
  //     })
  //   };
  //   return httpOptions;
  // }

  get formLoading(){
    return this.isLoading;
  }

  get displayError(){
    return this.errorMessage;
  }

  ngOnInit() {
    this.confirmEmailAddress(this.router.url);
  }

  confirmEmailAddress(emailConfirmationUrl){
    this.isLoading = true;
    const holder = emailConfirmationUrl.split('/');
    const newUrl = 'http://localhost:8900/email/' + holder[2];
    const data = { confirmationToken: holder[3]};
    this.authService.sendConfirmationEmail(newUrl, data).subscribe((responseData: AuthenticatedUserResponse ) => {
      console.log('responseData is: ', responseData);
      this.isLoading = false;
      this.router.navigate(['/appsPage']);
    }, error => {
      console.log('An error occured!', error);
      this.errorMessage = 'An Error occured';
      this.isLoading = false;
    });
  }

}
