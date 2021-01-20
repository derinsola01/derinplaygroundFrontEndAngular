import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticatedUserResponse } from '../response/auth.user.reponse';
import { AuthService } from '../service/auth.service';

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
    this.authService.userLogin(this.userLoginForm.value).subscribe((responseData: AuthenticatedUserResponse ) => {
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
    this.errorMessage = error.error.message;
    this.isLoading = false;
  }

}
