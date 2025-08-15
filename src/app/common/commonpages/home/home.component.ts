import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';
import { PlayGroundUser } from '../../user/playgrounduser/userModel/playgrounduser.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private playGroundUser: PlayGroundUser = this.authService.authenticatedUser;
  isUserAuthenticated = !!this.playGroundUser;
  isEmailValidated = this.playGroundUser ? this.playGroundUser.emailAddressValidated : false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
