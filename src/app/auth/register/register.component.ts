import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticatedUserResponse } from '../response/auth.user.reponse';
import { UserIdsAndEmails } from '../response/userid.email.response';
import { ValidationService } from '../service/validation.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm = this.formBuilder.group({
    userId: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)],
                  this.validationService.validateUsernameNotRegistered.bind(this.validationService)],
    firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    emailAddress: ['', [Validators.required, Validators.email],
                  this.validationService.validateEmailAddressNotRegistered.bind(this.validationService)],
    password: ['', [Validators.required, Validators.pattern(/^([A-Za-z0-9@_\-*&$%\^+=()#!])+/),
                  Validators.minLength(7), Validators.maxLength(50)]],
    confirmPassword: ['', [Validators.required], this.validatePasswordsAreEqual.bind(this)]
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

  runValidation(){
  this.validationService.getAllUserIdsAndEmails().subscribe(
    (responseData: UserIdsAndEmails) => {
      this.validateUserIds = responseData;
    });
  }

  private validatePasswordsAreEqual(fieldControl: FormControl) {
    return this.validationService.passwordMatchValidator(this.password.value, fieldControl.value);
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
    this.authService.registerNewUser(this.registrationForm.value).subscribe((responseData: AuthenticatedUserResponse) => {
      this.authenticatedUser = responseData;
      const emailValidator = {
        userId: this.authenticatedUser.userId,
        emailAddress: this.authenticatedUser.emailAddress
      };

      this.authService.validateEmailAddress(emailValidator, this.authenticatedUser.webToken)
        .subscribe(response => {
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
    this.errorMessage = 'An Error occured ' + error.error.message;
    this.isLoading = false;
  }

}
