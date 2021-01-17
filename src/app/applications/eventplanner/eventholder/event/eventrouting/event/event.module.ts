import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventRoutingModule } from './event-routing.module';
import { CreateEventComponent } from '../../createevent/createevent.component';
import { DeleteEventComponent } from '../../deleteevent/deleteevent.component';
import { ListEventsComponent } from '../../listevents/listevents.component';
import { ModifyEventComponent } from '../../modifyevent/modifyevent.component';
import { ViewEventComponent } from '../../viewevent/viewevent.component';
import { EventPlannerComponent } from 'src/app/applications/eventplanner/eventplanner.component';
import { AppLoadingSpinnerComponent } from 'src/app/common/spinners/loadingspinners/apploadingspinner/apploadingspinner.component';


@NgModule({
  declarations: [
    EventPlannerComponent,
    ListEventsComponent,
    ViewEventComponent,
    CreateEventComponent,
    DeleteEventComponent,
    ModifyEventComponent,
    AppLoadingSpinnerComponent
  ],
  imports: [ CommonModule, EventRoutingModule, EventRoutingModule ],
  exports: [
    EventPlannerComponent,
    ListEventsComponent,
    ViewEventComponent,
    CreateEventComponent,
    DeleteEventComponent,
    ModifyEventComponent,
    AppLoadingSpinnerComponent
  ]
})
export class EventModule { }
