import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  passwordResetForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.passwordResetForm = new FormGroup({
      currentPassword: new FormControl(''),
      newPassword: new FormControl(''),
      verifyNewPassword: new FormControl('')
    });
  }

  clear(){
    this.passwordResetForm.reset();
  }

  onSubmit(){
    console.log('Password reset form input is: ', this.passwordResetForm.value);
  }

}
