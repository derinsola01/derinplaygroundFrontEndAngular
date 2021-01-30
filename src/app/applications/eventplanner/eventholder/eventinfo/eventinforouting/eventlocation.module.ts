import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EventLocationComponent } from '../eventlocation/eventlocation.component';
import { CreateLocationComponent } from '../eventlocation/createlocation/createlocation.component';
import { DeleteLocationComponent } from '../eventlocation/deletelocation/deletelocation.component';
import { UpdateLocationComponent } from '../eventlocation/updatelocation/updatelocation.component';
import { ViewLocationComponent } from '../eventlocation/viewlocation/viewlocation.component';
import { ListLocationsComponent } from '../eventlocation/listlocations/listlocations.component';
import { EventLocationRoutingModule } from './event.location-routing.module';
import { EventLocationLoadingSpinnerComponent } from '../eventlocation/eventlocationloadingspinner/eventlocationloadingspinner.component';


@NgModule({
  declarations: [
    EventLocationComponent,
    ViewLocationComponent,
    UpdateLocationComponent,
    DeleteLocationComponent,
    CreateLocationComponent,
    ListLocationsComponent,
    EventLocationLoadingSpinnerComponent
  ],
  imports: [ ReactiveFormsModule, CommonModule, EventLocationRoutingModule ],
  exports: [
    EventLocationComponent,
    ViewLocationComponent,
    UpdateLocationComponent,
    DeleteLocationComponent,
    CreateLocationComponent,
    ListLocationsComponent,
    EventLocationLoadingSpinnerComponent
  ]
})
export class EventLocationModule { }
