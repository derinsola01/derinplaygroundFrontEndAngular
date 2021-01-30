import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventlocationloadingspinner',
  template: '<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
  styleUrls: ['./eventlocationloadingspinner.component.css']
})
export class EventLocationLoadingSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
