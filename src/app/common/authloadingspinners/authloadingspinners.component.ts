import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authloadingspinners',
  template: '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>',
  styleUrls: ['./authloadingspinners.component.css']
})
export class AuthLoadingSpinnersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
