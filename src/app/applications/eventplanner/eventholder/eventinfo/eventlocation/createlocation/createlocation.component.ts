import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-createlocation',
  templateUrl: './createlocation.component.html',
  styleUrls: ['./createlocation.component.css']
})
export class CreateLocationComponent implements OnInit {

  createLocationForm = this.formBuilder.group({
    streetAddress: ['', [Validators.required, Validators.min(5)]],
    city: ['', [Validators.required, Validators.min(5)]],
    state: ['', Validators.required],
    zipcode: ['', [Validators.required, Validators.max(6)]],
    country: ['', [Validators.required, Validators.email]]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

  clear(){
    this.createLocationForm.reset();
  }

  onSubmit(){
    console.log('Register user form input is: ', this.createLocationForm.value);
  }

}
