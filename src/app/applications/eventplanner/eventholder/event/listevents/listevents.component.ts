import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../service/event.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listevents',
  templateUrl: './listevents.component.html',
  styleUrls: ['./listevents.component.css']
})
export class ListEventsComponent implements OnInit {
// private formBuilder: FormBuilder,
  isLoading = false;
  constructor(private eventService: EventService, private router: Router) { }

  get formLoading() {
    return this.isLoading;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.eventService.getCompleteEvents().subscribe( res => {
      console.log('res after all said and done is: ', res);
      this.isLoading = false;
    });
    // this.getDiaryEntries(this.authService.authenticatedUser.userId, this.authService.authenticatedUser.userWebToken);
  }

}
