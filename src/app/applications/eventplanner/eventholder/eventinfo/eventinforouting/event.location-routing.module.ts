import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateLocationComponent } from '../eventlocation/createlocation/createlocation.component';
import { DeleteLocationComponent } from '../eventlocation/deletelocation/deletelocation.component';
import { EventLocationComponent } from '../eventlocation/eventlocation.component';
import { ListLocationsComponent } from '../eventlocation/listlocations/listlocations.component';
import { UpdateLocationComponent } from '../eventlocation/updatelocation/updatelocation.component';
import { ViewLocationComponent } from '../eventlocation/viewlocation/viewlocation.component';

const routes: Routes = [
  {
    path: '', component: EventLocationComponent,
    children: [
      {path: 'listLocations', component: ListLocationsComponent},
      {path: 'updateLocation', component: UpdateLocationComponent},
      {path: 'deleteLocation', component: DeleteLocationComponent},
      {path: 'createLocation', component: CreateLocationComponent},
      {path: 'viewLocation', component: ViewLocationComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventLocationRoutingModule { }
