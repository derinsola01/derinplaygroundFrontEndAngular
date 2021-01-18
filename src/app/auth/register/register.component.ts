import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticatedUserResponse } from '../response/auth.user.reponse';
import { UserIdsAndEmails } from '../response/userid.email.response';
import { AuthService } from '../service/authservice.service';
import { ValidationService } from '../service/validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // this.validationService.validateUserIdNotTaken.bind(this.validationService)
  registrationForm = this.formBuilder.group({
    userId: ['', [Validators.required, Validators.minLength(5)]],
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    emailAddress: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern, Validators.minLength(7)]],
    confirmPassword: ['', [Validators.required, Validators.pattern, Validators.minLength(7)]]
  },
  {
    validator: this.validationService.passwordMatchValidator('password', 'confirmPassword')
  });

  private authenticatedUser: AuthenticatedUserResponse;
  private isLoading = false;
  private errorMessage: string = null;
  private validateUserIds: UserIdsAndEmails;

  constructor(  private formBuilder: FormBuilder,
                private validationService: ValidationService,
                private authService: AuthService,
                private router: Router) { }

  ngOnInit(): void {
    this.runValidation();
  }

  validateGivenUserId(userId){
    console.log('this.validateUserIds inside validateGivenUserId is: ', this.validateUserIds);
    if (this.validateUserIds.userIds.find(userId)){
      return true;
    }
    return false;
    // this.validateUserIds
  }

  // onUserIdTouched(){
  //   this.runValidation();
  // }
  runValidation(){
  this.validationService.validateUserIdNotTaken().subscribe((responseData: UserIdsAndEmails) => {
      console.log('responseData for runValidation is: ', responseData);
      this.validateUserIds = responseData;
    }
  );
  }

  get userIdsAndEmailValidators(){
    return this.validateUserIds;
  }

  get formLoading(){
    return this.isLoading;
  }

  get displayError(){
    return this.errorMessage;
  }

  get userId(){
    return this.registrationForm.get('userId');
  }

  get firstName(){
    return this.registrationForm.get('firstName');
  }

  get lastName(){
    return this.registrationForm.get('lastName');
  }

  get emailAddress(){
    return this.registrationForm.get('emailAddress');
  }

  get password(){
    return this.registrationForm.get('password');
  }

  get confirmPassword(){
    return this.registrationForm.get('confirmPassword');
  }

  clear(){
    this.registrationForm.reset();
  }

  onSubmit(){
    this.isLoading = true;
    console.log('Register user form input is: ', this.registrationForm.value);
    this.authService.registerUser(this.registrationForm.value).subscribe((responseData: AuthenticatedUserResponse) => {
      console.log('responseData is: ', responseData);
      this.authenticatedUser = responseData;

      const emailValidator = {
        userId: this.authenticatedUser.userId,
        emailAddress: this.authenticatedUser.emailAddress
      };

      this.authService.sendValidationEmail(emailValidator, this.authenticatedUser.webToken)
        .subscribe(response => {
          console.log('email response is: ', response);
          this.isLoading = false;
          this.router.navigate(['/landingPage']);
        }, error => {
          this.handleError(error);
        });
    }, error => {
      this.handleError(error);
    });
    this.registrationForm.reset();
  }

  handleError(error){
    console.log('An error occured!', JSON.stringify(error));
    this.errorMessage = 'An Error occured ' + error.error.message;
    this.isLoading = false;
  }

}
