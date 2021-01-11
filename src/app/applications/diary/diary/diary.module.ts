import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiaryRoutingModule } from './diary-routing.module';
import { CreateEntryComponent } from '../createentry/createentry.component';
import { DiaryComponent } from '../diary.component';
import { UpdateEntryComponent } from '../updateentry/updateentry.component';
import { ViewEntryComponent } from '../viewentry/viewentry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListEntriesComponent } from '../listentries/listentries.component';


@NgModule({
  declarations: [ DiaryComponent, CreateEntryComponent, UpdateEntryComponent, ViewEntryComponent, ListEntriesComponent ],
  imports: [ ReactiveFormsModule, CommonModule, DiaryRoutingModule ],
  exports: [ DiaryComponent, CreateEntryComponent, UpdateEntryComponent, ViewEntryComponent, ListEntriesComponent ]
})
export class DiaryModule { }
