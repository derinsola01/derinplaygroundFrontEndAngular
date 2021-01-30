import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/applications/eventplanner/service/event.service';

@Component({
  selector: 'app-createguest',
  templateUrl: './createguest.component.html',
  styleUrls: ['./createguest.component.css']
})
export class CreateGuestComponent implements OnInit {

  createGuestForm = this.formBuilder.group({
    guestFirstName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
    guestLastName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
    guestEmailAddress: ['', [Validators.required, Validators.email]]
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

    get guestFirstName(){
      return this.createGuestForm.get('guestFirstName');
    }

    get guestLastName(){
      return this.createGuestForm.get('guestLastName');
    }

    get guestEmailAddress(){
      return this.createGuestForm.get('guestEmailAddress');
    }

    clear(){
      this.createGuestForm.reset();
    }

    onSubmit(){
      this.isLoading = true;
      this.eventService.createNewGuest(this.createGuestForm.value)
        .subscribe( (responseData) => {
          this.isLoading = false;
          console.log('responseData is: ', responseData);
        });
      this.createGuestForm.reset();
    }

    handleError(error){
      this.errorMessage = 'An Error occured ' + error.error.message;
      this.isLoading = false;
    }
}
