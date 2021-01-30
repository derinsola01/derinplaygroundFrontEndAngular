import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventloadingspinner',
  template: '<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
  styleUrls: ['./eventloadingspinner.component.css']
})
export class EventLoadingSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
