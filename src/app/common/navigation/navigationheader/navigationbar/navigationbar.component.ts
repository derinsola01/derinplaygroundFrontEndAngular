import { AuthService } from '../../../../auth/service/authservice.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PlayGroundUser } from 'src/app/common/user/playgrounduser/userModel/PlaygroundUser.model';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationBarComponent implements OnInit, OnDestroy {

  navigationSpinner = false;
  isAuthenticated = false;
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

  sayGoodByeForNow(){
    this.navigationSpinner = true;
    this.authService.logout().subscribe(
      res => {
        this.authService.playGroundUser.next(null);
        this.router.navigate(['/home']);
        localStorage.clear();
        // localStorage.removeItem('authenticatedUser');
      }
    );
  }

}
