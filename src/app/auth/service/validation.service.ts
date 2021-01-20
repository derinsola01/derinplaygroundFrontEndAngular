import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserIdsAndEmails } from '../response/userid.email.response';
import { RegisteredUsers } from '../models/registered.users.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  registeredUsers: RegisteredUsers;

  constructor(private authService: AuthService) { }

  passwordMatchValidator(password: string, confirmPassword: string) {
    return of(password !== confirmPassword).pipe(
      map(result => result ? { passwordMismatch: true } : null)
    );
  }

  validateUsernameNotRegistered(fieldControl: FormControl) {
    return of(this.registeredUsers.userIds.includes(fieldControl.value)).pipe(
      map(result => result ? { notUnique: true } : null)
    );
  }

  validateEmailAddressNotRegistered(fieldControl: FormControl) {
    return of(this.registeredUsers.emailAddresses.includes(fieldControl.value)).pipe(
      map(result => result ? { notUnique: true } : null)
    );
  }

  getAllUserIdsAndEmails() {
    return this.authService.getAllRegisteredUserIdsAndEmails().pipe(
    (tap( responseData => {
      this.populateRegisteredUsers(responseData);
    })));
  }

  populateRegisteredUsers(responseData: UserIdsAndEmails) {
    const users = new RegisteredUsers(responseData.userIds, responseData.emailAddresses);
    this.registeredUsers = users;
  }

}
