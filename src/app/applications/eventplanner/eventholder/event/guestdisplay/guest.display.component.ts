import { GuestService } from './../../../service/guest.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest-display',
  templateUrl: './guest.display.component.html',
  styleUrls: ['./guest.display.component.css']
})
export class GuestDisplayComponent implements OnInit {

  private isLoading = false;
  private errorMessage: string = null;

  constructor(private router: Router, private guestService: GuestService) { }

  ngOnInit(): void {
    this.displayEventToGuest(this.router.url);
  }

  displayEventToGuest(invitationUrl){
    this.isLoading = true;
    const holder = invitationUrl.split('/');
    const newUrl = 'http://localhost:8900/event/' + holder[2];
    const guestPass = holder[3];
    this.guestService.displayEventToGuest(newUrl, guestPass).subscribe(responseData => {
      console.log('responseData holds: ', responseData);
    });
  }

  // guestResponseToEvent(){
  //   this.isLoading = true;
  //   const guestPass = holder[3];
  //   this.guestService.displayEventToGuest(newUrl, guestPass).subscribe(responseData => {
  //     console.log('responseData holds: ', responseData);
  //   });
  // }

}
