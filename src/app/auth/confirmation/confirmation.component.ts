import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatedUserResponse } from '../response/auth.user.reponse';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  private isLoading = false;
  private errorMessage: string = null;

  constructor(private router: Router, private authService: AuthService) {}

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
    console.log('emailConfirmationUrl is: ' + emailConfirmationUrl);
    const holder = emailConfirmationUrl.split('/');
    const emailToken = holder[2];
    const data = { confirmationToken: holder[3]};
    this.authService.confirmUserEmail(emailToken, data).subscribe((responseData: AuthenticatedUserResponse ) => {
      this.isLoading = false;
      this.router.navigate(['/appsPage']);
    }, error => {
      this.handleError(error);
    });
  }

  handleError(error){
    this.errorMessage = error.error.message;
    this.isLoading = false;
  }

}
