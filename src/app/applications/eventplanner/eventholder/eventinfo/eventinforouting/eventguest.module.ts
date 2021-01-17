import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventGuestRoutingModule } from './event.guest-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EventGuestsComponent } from '../eventguests/eventguests.component';
import { UpdateGuestComponent } from '../eventguests/updateguest/updateguest.component';
import { InviteGuestToEventComponent } from '../eventguests/inviteguesttoevent/inviteguesttoevent.component';
import { DeleteGuestComponent } from '../eventguests/deleteguest/deleteguest.component';
import { CreateGuestComponent } from '../eventguests/createguest/createguest.component';
import { ListGuestsComponent } from '../eventguests/listguests/listguests.component';
import { ViewGuestComponent } from '../eventguests/viewguest/viewguest.component';


@NgModule({
  declarations: [
    EventGuestsComponent,
    UpdateGuestComponent,
    InviteGuestToEventComponent,
    DeleteGuestComponent,
    CreateGuestComponent,
    ListGuestsComponent,
    ViewGuestComponent
  ],
  imports: [ ReactiveFormsModule, CommonModule, EventGuestRoutingModule ],
  exports: [
    EventGuestsComponent,
    UpdateGuestComponent,
    InviteGuestToEventComponent,
    DeleteGuestComponent,
    CreateGuestComponent,
    ListGuestsComponent,
    ViewGuestComponent
  ]
})
export class EventGuestModule { }
