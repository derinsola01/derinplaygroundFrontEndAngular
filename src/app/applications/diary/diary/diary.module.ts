import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryRoutingModule } from './diary-routing.module';
import { CreateEntryComponent } from '../createentry/createentry.component';
import { DiaryComponent } from '../diary.component';
import { UpdateEntryComponent } from '../updateentry/updateentry.component';
import { ViewEntryComponent } from '../viewentry/viewentry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListEntriesComponent } from '../listentries/listentries.component';
import { DiaryLoadingSpinnerComponent } from 'src/app/common/spinners/loadingspinners/diaryloadingspinner/diaryloadingspinner.component';
import { CreateDiaryPasscodeComponent } from '../creatediarypasscode/create.diary.passcode.component';

@NgModule({
  declarations: [ DiaryComponent,
    CreateEntryComponent,
    UpdateEntryComponent,
    ViewEntryComponent,
    ListEntriesComponent,
    DiaryLoadingSpinnerComponent,
    CreateDiaryPasscodeComponent
  ],
  imports: [ ReactiveFormsModule, CommonModule, DiaryRoutingModule ],
  exports: [ DiaryComponent,
    CreateEntryComponent,
    UpdateEntryComponent,
    ViewEntryComponent,
    ListEntriesComponent,
    DiaryLoadingSpinnerComponent,
    CreateDiaryPasscodeComponent
   ]
})
export class DiaryModule { }
