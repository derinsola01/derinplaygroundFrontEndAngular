import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listlocations',
  templateUrl: './listlocations.component.html',
  styleUrls: ['./listlocations.component.css']
})
export class ListLocationsComponent implements OnInit {

  isLoading = false;

  constructor() { }

  ngOnInit(): void {
  }

  get formLoading() {
    return this.isLoading;
  }

}
