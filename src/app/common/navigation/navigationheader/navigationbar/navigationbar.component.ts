import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PlayGroundUser } from 'src/app/common/user/playgrounduser/userModel/playgrounduser.model';
import { AuthService } from 'src/app/auth/service/auth.service';
import { faUser, faHeart, faHome, faSearch, faSpinner, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationBarComponent implements OnInit, OnDestroy {

  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  navigationSpinner = false;
  isAuthenticated = false;
  emailValidated = false;
  private userSub: Subscription;
  authenticatedUser: PlayGroundUser;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  ngOnInit() {
    this.userSub = this.authService.playGroundUser.subscribe(user => {
      this.isAuthenticated = !!user;
      this.authenticatedUser = user;
    });
  }

  get authUserFromSetter(){
    return this.authenticatedUser;
  }

  get isEmailValidated() {
    if (this.authenticatedUser) {
      this.emailValidated = this.authenticatedUser.emailAddressValidated;
    }
    return this.emailValidated;
  }

  sayGoodByeForNow(){
    this.navigationSpinner = true;
    this.authService.userLogout(this.authenticatedUser.userId, this.authenticatedUser.userWebToken).subscribe(
      res => {
        this.authService.playGroundUser.next(null);
        this.router.navigate(['/home']);
        localStorage.clear();
      }
    );
  }

}
