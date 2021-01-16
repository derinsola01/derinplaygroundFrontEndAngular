import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService } from 'src/app/auth/service/routeguard.service';
import { CreateGuestComponent } from '../eventguests/createguest/createguest.component';
import { DeleteGuestComponent } from '../eventguests/deleteguest/deleteguest.component';
import { EventGuestsComponent } from '../eventguests/eventguests.component';
import { InviteGuestToEventComponent } from '../eventguests/inviteguesttoevent/inviteguesttoevent.component';
import { ListGuestsComponent } from '../eventguests/listguests/listguests.component';
import { UpdateGuestComponent } from '../eventguests/updateguest/updateguest.component';
import { ViewGuestComponent } from '../eventguests/viewguest/viewguest.component';
import { CreateLocationComponent } from '../eventlocation/createlocation/createlocation.component';
import { DeleteLocationComponent } from '../eventlocation/deletelocation/deletelocation.component';
import { EventLocationComponent } from '../eventlocation/eventlocation.component';
import { ListLocationsComponent } from '../eventlocation/listlocations/listlocations.component';
import { UpdateLocationComponent } from '../eventlocation/updatelocation/updatelocation.component';
import { ViewLocationComponent } from '../eventlocation/viewlocation/viewlocation.component';
import { EventPlannerComponent } from '../eventplanner.component';

const routes: Routes = [
  {
    path: '', component: EventPlannerComponent, canActivate: [ RouteGuardService ],
    children: [
      {path: 'location', component: EventLocationComponent,
      children: [
        {path: 'listLocations', component: ListLocationsComponent},
        {path: 'updateLocation', component: UpdateLocationComponent},
        {path: 'deleteLocation', component: DeleteLocationComponent},
        {path: 'createLocation', component: CreateLocationComponent},
        {path: 'viewLocation', component: ViewLocationComponent}
      ]},
      {path: 'guest', component: EventGuestsComponent, canActivate: [ RouteGuardService ],
        children: [
          {path: 'listGuests', component: ListGuestsComponent},
          {path: 'viewGuest', component: ViewGuestComponent},
          {path: 'updateGuest', component: UpdateGuestComponent},
          {path: 'inviteGuest', component: InviteGuestToEventComponent},
          {path: 'deleteGuest', component: DeleteGuestComponent},
          {path: 'createGuest', component: CreateGuestComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventPlannerRoutingModule { }
