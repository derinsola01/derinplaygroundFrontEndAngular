import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventRoutingModule } from './event-routing.module';
import { CreateEventComponent } from '../../createevent/createevent.component';
import { DeleteEventComponent } from '../../deleteevent/deleteevent.component';
import { ListEventsComponent } from '../../listevents/listevents.component';
import { ModifyEventComponent } from '../../modifyevent/modifyevent.component';
import { ViewEventComponent } from '../../viewevent/viewevent.component';
import { EventPlannerComponent } from 'src/app/applications/eventplanner/eventplanner.component';
import { EventLoadingSpinnerComponent } from 'src/app/common/spinners/loadingspinners/eventloadingspinner/eventloadingspinner.component';
import { EventnavigationbarComponent } from 'src/app/common/navigation/navigationheader/eventnavigationbar/eventnavigationbar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EventPlannerComponent,
    ListEventsComponent,
    ViewEventComponent,
    CreateEventComponent,
    DeleteEventComponent,
    ModifyEventComponent,
    EventLoadingSpinnerComponent,
    EventnavigationbarComponent
  ],
  imports: [ CommonModule, EventRoutingModule, ReactiveFormsModule ],
  exports: [
    EventPlannerComponent,
    ListEventsComponent,
    ViewEventComponent,
    CreateEventComponent,
    DeleteEventComponent,
    ModifyEventComponent,
    EventLoadingSpinnerComponent,
    EventnavigationbarComponent
  ]
})
export class EventModule { }
