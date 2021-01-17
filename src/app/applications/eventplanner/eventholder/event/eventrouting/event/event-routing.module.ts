import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventPlannerComponent } from 'src/app/applications/eventplanner/eventplanner.component';
import { RouteGuardService } from 'src/app/auth/service/routeguards/routeguard.service';
import { CreateEventComponent } from '../../createevent/createevent.component';
import { DeleteEventComponent } from '../../deleteevent/deleteevent.component';
import { ListEventsComponent } from '../../listevents/listevents.component';
import { ModifyEventComponent } from '../../modifyevent/modifyevent.component';
import { ViewEventComponent } from '../../viewevent/viewevent.component';


const routes: Routes = [
  {
    path: '', component: EventPlannerComponent, canActivate: [ RouteGuardService ],
    children: [
      {path: 'listEvents', component: ListEventsComponent},
      {path: 'viewEvent', component: ViewEventComponent},
      {path: 'createEvent', component: CreateEventComponent},
      {path: 'deleteEvent', component: DeleteEventComponent},
      {path: 'editEvent', component: ModifyEventComponent},
      {
        path: 'location',
        loadChildren: () => import('../../../eventinfo/eventinforouting/eventlocation.module').then(m => m.EventLocationModule)
      },
      {
        path: 'guest',
        loadChildren: () => import('../../../eventinfo/eventinforouting/eventguest.module').then(m => m.EventGuestModule)
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
