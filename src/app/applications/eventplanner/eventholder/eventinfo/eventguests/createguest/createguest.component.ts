import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/applications/eventplanner/service/event.service';
import { Guest } from '../guestmodel/guest.model';

@Component({
  selector: 'app-createguest',
  templateUrl: './createguest.component.html',
  styleUrls: ['./createguest.component.css']
})
export class CreateGuestComponent implements OnInit {

  private isLoading = false;
  private errorMessage: string = null;
  isValidFormSubmitted = null;
  private newGuests: Guest[];

  createGuestForm = this.formBuilder.group({
    createGuestRequests: this.formBuilder.array([])
  });

  createGuestFormGroup() {
    return this.formBuilder.group({
      guestFirstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      guestLastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      guestEmailAddress: ['', [Validators.required, Validators.email]]
    });
  }

    constructor(private formBuilder: FormBuilder,
                private eventService: EventService,
                private router: Router) { }

    ngOnInit(): void {
    }

    get formLoading(){
      return this.isLoading;
    }

    get guests(): FormArray {
      return this.createGuestForm.get('createGuestRequests') as FormArray;
    }

    addGuest() {
      const guest = this.createGuestFormGroup();
      this.guests.push(guest);
    }

    removeGuest(index: number) {
      this.guests.removeAt(index);
    }

    get displayError(){
      return this.errorMessage;
    }

    clear(){
      this.createGuestForm.reset();
    }

    get disableSubmitButton() {
      let returnValue = true;
      if (this.createGuestForm.valid && this.guests.value.length < 1){
        return returnValue;
      } else if (this.createGuestForm.invalid || this.guests.value.length < 1){
        return returnValue;
      } else{
        return returnValue = false;
      }
    }

    onSubmit(){
      this.newGuests = this.createGuestForm.value.createGuestRequests;
      console.log('this.newGuests is: ', this.newGuests);
      this.isLoading = true;
      this.eventService.createNewGuest(this.newGuests)
        .subscribe( (responseData) => {
          this.isLoading = false;
          this.router.navigate(['/event/guest/listGuests']);
          console.log('responseData is: ', responseData);
        });
      this.createGuestForm.reset();
    }

    handleError(error){
      this.errorMessage = 'An Error occured ' + error.error.message;
      this.isLoading = false;
    }
}
