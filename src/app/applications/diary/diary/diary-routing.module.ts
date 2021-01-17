import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService } from 'src/app/auth/service/routeguards/routeguard.service';
import { CreateEntryComponent } from '../createentry/createentry.component';
import { DiaryComponent } from '../diary.component';
import { ListEntriesComponent } from '../listentries/listentries.component';
import { UpdateEntryComponent } from '../updateentry/updateentry.component';
import { ViewEntryComponent } from '../viewentry/viewentry.component';


const routes: Routes = [
  {
    path: '', component: DiaryComponent, canActivate: [ RouteGuardService ],
    children: [
      {path: 'listEntries', component: ListEntriesComponent},
      {path: 'createEntry', component: CreateEntryComponent},
      {path: 'updateEntry', component: UpdateEntryComponent},
      {path: 'viewEntry', component: ViewEntryComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiaryRoutingModule { }
