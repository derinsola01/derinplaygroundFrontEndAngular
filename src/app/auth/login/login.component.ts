import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/authservice.service';
import { AuthenticatedUserResponse } from '../response/auth.user.reponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoginForm = this.formBuilder.group({
    userId: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  private isLoading = false;
  private errorMessage: string = null;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }

  get userId(){
    return this.userLoginForm.get('userId');
  }

  get password(){
    return this.userLoginForm.get('password');
  }

  get formLoading(){
    return this.isLoading;
  }

  get displayError(){
    return this.errorMessage;
  }

  onSubmit(){
    this.isLoading = true;
    console.log('Register user form input is: ', this.userLoginForm.value);
    this.authService.login(this.userLoginForm.value).subscribe((responseData: AuthenticatedUserResponse ) => {
      console.log('responseData is: ', responseData);
      this.isLoading = false;
      if ( responseData.emailAddressValidated === true ) {
        this.router.navigate(['/appsPage']);
      } else {
        this.router.navigate(['/landingPage']);
      }
    }, error => {
      this.handleError(error);
    });
    this.userLoginForm.reset();
  }

  handleError(error){
    console.log('An error occured!', error.error.message);
    console.log('Complete error object: ', error);
    this.errorMessage = error.error.message;
    this.isLoading = false;
  }

}
