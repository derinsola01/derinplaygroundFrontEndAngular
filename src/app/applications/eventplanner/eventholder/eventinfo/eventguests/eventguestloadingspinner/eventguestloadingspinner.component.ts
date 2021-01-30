import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventguestloadingspinner',
  template: '<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
  styleUrls: ['./eventguestloadingspinner.component.css']
})
export class EventGuestLoadingSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
