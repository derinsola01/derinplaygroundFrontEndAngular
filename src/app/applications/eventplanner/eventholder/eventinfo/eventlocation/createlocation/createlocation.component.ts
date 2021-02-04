import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/applications/eventplanner/service/event.service';

@Component({
  selector: 'app-createlocation',
  templateUrl: './createlocation.component.html',
  styleUrls: ['./createlocation.component.css']
})
export class CreateLocationComponent implements OnInit {

  createLocationForm = this.formBuilder.group({
    locationName: ['', Validators.required],
    streetAddress: ['', [Validators.required, Validators.min(5)]],
    city: ['', [Validators.required, Validators.min(3)]],
    state: ['', Validators.required],
    zipcode: ['', [Validators.required]],
    country: ['', [Validators.required]]
  });

  // constructor(private formBuilder: FormBuilder) { }  , Validators.max(7)

  // ngOnInit(): void { }

  // clear(){
  //   this.createLocationForm.reset();
  // }

  // onSubmit(){
  //   console.log('Register user form input is: ', this.createLocationForm.value);
  // }
  // createEventForm = this.formBuilder.group({
  //   eventName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
  //   eventDescription: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
  //   eventStartTime: ['', [Validators.required]],
  //   eventEndTime: ['', [Validators.required]]
  // });

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

    get streetAddress(){
      return this.createLocationForm.get('streetAddress');
    }

    get city(){
      return this.createLocationForm.get('city');
    }

    get state(){
      return this.createLocationForm.get('state');
    }

    get zipcode(){
      return this.createLocationForm.get('zipcode');
    }

    get country(){
      return this.createLocationForm.get('country');
    }

    get locationName(){
      return this.createLocationForm.get('locationName');
    }

    clear(){
      this.createLocationForm.reset();
    }

    onSubmit(){
      this.isLoading = true;
      console.log('this.createLocationForm.value is: ', this.createLocationForm.value);
      this.eventService.createNewLocation(this.createLocationForm.value)
        .subscribe( (responseData) => {
          this.isLoading = false;
          console.log('responseData is: ', responseData);
          this.router.navigate(['/event/location/listLocations']);
        });
      this.createLocationForm.reset();
    }

    handleError(error){
      this.errorMessage = 'An Error occured ' + error.error.message;
      this.isLoading = false;
    }

}
