import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { EventGuestLoadingSpinnerComponent } from '../eventguests/eventguestloadingspinner/eventguestloadingspinner.component';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    EventGuestsComponent,
    UpdateGuestComponent,
    InviteGuestToEventComponent,
    DeleteGuestComponent,
    CreateGuestComponent,
    ListGuestsComponent,
    ViewGuestComponent,
    EventGuestLoadingSpinnerComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    EventGuestRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule
  ],
  exports: [
    EventGuestsComponent,
    UpdateGuestComponent,
    InviteGuestToEventComponent,
    DeleteGuestComponent,
    CreateGuestComponent,
    ListGuestsComponent,
    ViewGuestComponent,
    EventGuestLoadingSpinnerComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class EventGuestModule { }
