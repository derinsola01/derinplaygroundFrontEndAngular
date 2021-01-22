import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventRoutingModule } from './event-routing.module';
import { CreateEventComponent } from '../../createevent/createevent.component';
import { DeleteEventComponent } from '../../deleteevent/deleteevent.component';
import { ListEventsComponent } from '../../listevents/listevents.component';
import { ModifyEventComponent } from '../../modifyevent/modifyevent.component';
import { ViewEventComponent } from '../../viewevent/viewevent.component';
import { EventPlannerComponent } from 'src/app/applications/eventplanner/eventplanner.component';



@NgModule({
  declarations: [
    EventPlannerComponent,
    ListEventsComponent,
    ViewEventComponent,
    CreateEventComponent,
    DeleteEventComponent,
    ModifyEventComponent
  ],
  imports: [ CommonModule, EventRoutingModule, EventRoutingModule ],
  exports: [
    EventPlannerComponent,
    ListEventsComponent,
    ViewEventComponent,
    CreateEventComponent,
    DeleteEventComponent,
    ModifyEventComponent
  ]
})
export class EventModule { }
