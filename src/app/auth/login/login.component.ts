import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/authservice.service';

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

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void { }

  get userId(){
    return this.userLoginForm.get('userId');
  }

  get password(){
    return this.userLoginForm.get('password');
  }

  onSubmit(){
    console.log('Register user form input is: ', this.userLoginForm.value);
    const postData = this.userLoginForm.value;
    this.authService.login(postData);
  }

}
