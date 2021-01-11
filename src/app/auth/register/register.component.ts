import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../service/validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm = this.formBuilder.group({
    userId: ['', [Validators.required, Validators.minLength(5)],
                this.validationService.validateUserIdNotTaken.bind(this.validationService)],
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    emailAddress: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern]],
    confirmPassword: ['', [Validators.required, Validators.pattern]]
  },
  {
    validator: this.validationService.passwordMatchValidator('password', 'confirmPassword')
  });

  constructor(private formBuilder: FormBuilder, private validationService: ValidationService) { }

  ngOnInit(): void { }

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
    console.log('Register user form input is: ', this.registrationForm.value);
  }

}
