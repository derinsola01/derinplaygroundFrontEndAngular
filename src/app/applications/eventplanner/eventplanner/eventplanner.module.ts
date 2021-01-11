import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventPlannerRoutingModule } from './eventplanner-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EventPlannerComponent } from '../eventplanner.component';
import { EventLocationComponent } from '../eventlocation/eventlocation.component';
import { EventGuestsComponent } from '../eventguests/eventguests.component';
import { UpdateGuestComponent } from '../eventguests/updateguest/updateguest.component';
import { InviteGuestToEventComponent } from '../eventguests/inviteguesttoevent/inviteguesttoevent.component';
import { DeleteGuestComponent } from '../eventguests/deleteguest/deleteguest.component';
import { CreateGuestComponent } from '../eventguests/createguest/createguest.component';
import { ListGuestsComponent } from '../eventguests/listguests/listguests.component';
import { CreateLocationComponent } from '../eventlocation/createlocation/createlocation.component';
import { DeleteLocationComponent } from '../eventlocation/deletelocation/deletelocation.component';
import { UpdateLocationComponent } from '../eventlocation/updatelocation/updatelocation.component';
import { ViewLocationComponent } from '../eventlocation/viewlocation/viewlocation.component';
import { ViewGuestComponent } from '../eventguests/viewguest/viewguest.component';
import { ListLocationsComponent } from '../eventlocation/listlocations/listlocations.component';


@NgModule({
  declarations: [
    EventPlannerComponent,
    EventLocationComponent,
    EventGuestsComponent,
    UpdateGuestComponent,
    InviteGuestToEventComponent,
    DeleteGuestComponent,
    CreateGuestComponent,
    ListGuestsComponent,
    ViewLocationComponent,
    UpdateLocationComponent,
    DeleteLocationComponent,
    CreateLocationComponent,
    ListLocationsComponent,
    ViewGuestComponent
  ],
  imports: [ ReactiveFormsModule, CommonModule, EventPlannerRoutingModule ],
  exports: [
    EventPlannerComponent,
    EventLocationComponent,
    EventGuestsComponent,
    UpdateGuestComponent,
    InviteGuestToEventComponent,
    DeleteGuestComponent,
    CreateGuestComponent,
    ListGuestsComponent,
    ViewLocationComponent,
    UpdateLocationComponent,
    DeleteLocationComponent,
    CreateLocationComponent,
    ListLocationsComponent,
    ViewGuestComponent
  ]
})
export class EventPlannerModule { }
