import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';


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
  imports: [
    ReactiveFormsModule,
    CommonModule,
    EventLocationRoutingModule,
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
    EventLocationComponent,
    ViewLocationComponent,
    UpdateLocationComponent,
    DeleteLocationComponent,
    CreateLocationComponent,
    ListLocationsComponent,
    EventLocationLoadingSpinnerComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class EventLocationModule { }
