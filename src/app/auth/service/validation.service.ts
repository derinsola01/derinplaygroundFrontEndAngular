import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(private authService: AuthService) { }

  passwordMatchValidator(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors.passwordMismatch
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }

  validateUserIdNotTaken(control: AbstractControl) {
    return this.checkUserIdNotTaken(control.value).pipe(
      map(res => {
        return res ? null : { userIdTaken: true };
      })
    );
  }

  //Fake API call -- You can have this in another service
  checkUserIdNotTaken(userId: string): Observable<boolean> {
    return this.authService.validateUserId(userId);
  }
}
