import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GuestService } from 'src/app/applications/eventplanner/service/guest.service';
import { Guest } from '../guestmodel/guest.model';

type GuestFG = {
  guestId: FormControl<number | null>;
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  emailAddress: FormControl<string>;
};

type CreateGuestForm = {
  createGuestRequests: FormArray<FormGroup<GuestFG>>;
};

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

  // addGuestRow() {
    // this.createGuestForm.controls.createGuestRequests.push(
    //   this.formBuilder.nonNullable.group<GuestFG>({
    //     guestId: this.formBuilder.nonNullable.control('', { validators: [Validators.required] }),
    //     firstName: this.formBuilder.nonNullable.control('', { validators: [Validators.required] }),
    //     lastName: this.formBuilder.nonNullable.control('', { validators: [Validators.required] }),
    //     emailAddress: this.formBuilder.nonNullable.control('', { validators: [Validators.required] }),
    //   })
    // );
  // }

  createGuestFormGroup() {
    return this.formBuilder.nonNullable.group<GuestFG>({
      guestId: this.formBuilder.control<number | null>({ value: null, disabled: true }),
      firstName: this.formBuilder.nonNullable.control('', { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(50)] }),
      lastName: this.formBuilder.nonNullable.control('', { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(50)] }),
      emailAddress: this.formBuilder.nonNullable.control('', { validators: [Validators.required, Validators.email] }),
    });
  }

    constructor(private formBuilder: FormBuilder,
                private guestService: GuestService,
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
      this.guestService.createNewGuest(this.newGuests)
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
