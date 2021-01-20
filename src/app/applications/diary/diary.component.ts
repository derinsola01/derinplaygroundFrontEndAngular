import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';
import { PlayGroundUser } from 'src/app/common/user/playgrounduser/userModel/PlaygroundUser.model';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getDiaryEntries(this.authService.authenticatedUser);
  }

  getDiaryEntries(authenticatedUser: PlayGroundUser) {

  }

}
