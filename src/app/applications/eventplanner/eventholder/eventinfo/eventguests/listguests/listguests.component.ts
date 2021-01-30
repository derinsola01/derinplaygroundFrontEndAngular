import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listguests',
  templateUrl: './listguests.component.html',
  styleUrls: ['./listguests.component.css']
})
export class ListGuestsComponent implements OnInit {

  isLoading = false;
  constructor() { }

  ngOnInit(): void {
  }

  get formLoading() {
    return this.isLoading;
  }

}
