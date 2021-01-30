import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../../../service/event.service';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']
})
export class CreateEventComponent implements OnInit {

createEventForm = this.formBuilder.group({
  eventName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
  eventDescription: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
  eventStartTime: ['', [Validators.required]],
  eventEndTime: ['', [Validators.required]]
});

private isLoading = false;
private errorMessage: string = null;

  constructor(private formBuilder: FormBuilder,
              private eventService: EventService,
              private router: Router) { }

  ngOnInit(): void {
  }

  get formLoading(){
    return this.isLoading;
  }

  get displayError(){
    return this.errorMessage;
  }

  get eventName(){
    return this.createEventForm.get('eventName');
  }

  get eventDescription(){
    return this.createEventForm.get('eventDescription');
  }

  get eventStartTime(){
    return this.createEventForm.get('eventStartTime');
  }

  get eventEndTime(){
    return this.createEventForm.get('eventEndTime');
  }

  clear(){
    this.createEventForm.reset();
  }

  onSubmit(){
    this.isLoading = true;
    this.eventService.createNewEvent(this.createEventForm.value)
      .subscribe( (responseData) => {
        this.isLoading = false;
        console.log('responseData is: ', responseData);
      });
    this.createEventForm.reset();
  }

  handleError(error){
    this.errorMessage = 'An Error occured ' + error.error.message;
    this.isLoading = false;
  }

}
