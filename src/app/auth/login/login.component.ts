import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoginForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.userLoginForm = new FormGroup({
      emailAddress: new FormControl(''),
      password: new FormControl('')
    });
  }

  clear(){
    this.userLoginForm.reset();
  }

  onSubmit(){
    console.log('Register user form input is: ', this.userLoginForm.value);
  }

}
