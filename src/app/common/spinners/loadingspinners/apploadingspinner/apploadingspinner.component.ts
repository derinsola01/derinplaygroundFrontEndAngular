import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apploadingspinner',
  template: '<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
  styleUrls: ['./apploadingspinner.component.css']
})
export class AppLoadingSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
