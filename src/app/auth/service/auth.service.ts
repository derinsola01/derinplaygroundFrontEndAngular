import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthHttpService } from 'src/app/common/httpservices/auth.http.service';
import { EmailHttpService } from 'src/app/common/httpservices/email.http.service';
import { PlayGroundUser } from 'src/app/common/user/playgrounduser/userModel/PlaygroundUser.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public playGroundUser = new BehaviorSubject<PlayGroundUser>(null);
  public authenticatedUser: PlayGroundUser;

  constructor(
    private authHttpService: AuthHttpService,
    private emailHttpService: EmailHttpService,
    private router: Router) { }

  getAllRegisteredUserIdsAndEmails() {
    return this.authHttpService.registeredUserIdsAndEmails('dummyValue');
  }

  registerNewUser(postData) {
    return this.authHttpService.registerUser(postData).pipe(tap( responseData => {
      this.authenticatedPlayGroundUser(responseData);
    }));
  }

  private authenticatedPlayGroundUser(responseData) {
    const registeredUser = new PlayGroundUser(
                                responseData.userId, responseData.firstName, responseData.lastName,
                                responseData.emailAddress, responseData.emailAddressValidated,
                                responseData.tokenExpirationTime, responseData.webToken
                                );
    this.playGroundUser.next(registeredUser);
    this.authenticatedUser = registeredUser;
    localStorage.setItem('authenticatedUser', JSON.stringify(this.authenticatedUser));
  }

  validateEmailAddress(postData, userWebToken: string) {
    return this.emailHttpService.sendValidationEmail(postData, userWebToken);
  }

  confirmUserEmail(postUrl: string, postData) {
    return this.emailHttpService.sendConfirmationEmail(postUrl, postData).pipe(tap( responseData => {
      this.authenticatedPlayGroundUser(responseData);
    }));
  }

  autoLogin() {
    const authenticatedUser: PlayGroundUser = JSON.parse(localStorage.getItem('authenticatedUser'));
    if (!authenticatedUser) {
      return;
    }
    this.autoLogout(authenticatedUser.tokenExpirationTime - new Date().getTime());
    this.authenticatedPlayGroundUser(authenticatedUser);
  }

  userLogin(postData) {
    return this.authHttpService.login(postData).pipe(tap( responseData => {
      this.authenticatedPlayGroundUser(responseData);
    }));
  }

  autoLogout(tokenExpirationDuration: number) {
    console.log('tokenExpirationDuration is: ', tokenExpirationDuration);
    setTimeout(() => {
      localStorage.clear();
    }, tokenExpirationDuration);
  }

  userLogout(userId: string, webToken: string) {
    return this.authHttpService.logout(userId, webToken);
  }

  handleError(arg0: string, postData: any): any {
    throw new Error('Method not implemented.');
  }

}
