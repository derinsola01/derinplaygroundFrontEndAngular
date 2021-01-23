import { Router } from '@angular/router';
import { DiaryService } from './../service/diary.service';
import { Component, OnInit } from '@angular/core';
import { UserDiaryEntries } from '../model/user.diary.entries.model';
import { Form, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-updateentry',
  templateUrl: './updateentry.component.html',
  styleUrls: ['./updateentry.component.css']
})
export class UpdateEntryComponent implements OnInit {

  selectedEntry: UserDiaryEntries;
  private isLoading = false;
  private errorMessage: string = null;

  updateDiaryEntryForm = this.formBuilder.group({
    updateDiaryEntry: new FormControl(this.diaryService.selectedDiaryEntry.diaryEntry)
  });

  constructor(private diaryService: DiaryService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.getDiaryEntry(this.diaryService.selectedDiaryEntry);
    this.refreshState(this.diaryService.selectedDiaryEntry);
  }

  refreshState(diaryEntry) {
    const isStoredLocally = JSON.parse(localStorage.getItem('diaryEntryForEdit'));
    if (!isStoredLocally){
      localStorage.setItem('diaryEntryForEdit', JSON.stringify(diaryEntry));
    } else {
      this.selectedEntry = isStoredLocally;
    }
  }

  goBackToDiaryEntries() {
    this.diaryService.diaryEntryForView(this.selectedEntry);
    localStorage.removeItem('diaryEntryForEdit');
    this.router.navigate(['/diary/viewEntry']);
  }

  get diaryEntry(){
    return this.updateDiaryEntryForm.get('updateDiaryEntry');
  }

  getDiaryEntry(diaryEntry) {
    this.selectedEntry = diaryEntry;
  }

  get selectedDiaryEntry() {
    return this.selectedEntry;
  }

  updateDiaryEntry() {
    this.isLoading = true;
    this.diaryService.updateDiary(this.updateDiaryEntryForm.value.updateDiaryEntry,
                                  this.diaryService.diaryEntry.diaryEntryDate)
          .subscribe(responseData => {
      this.isLoading = false;
      this.router.navigate(['/diary/listEntries']);
    }, error => {
      this.handleError(error);
    });
    this.updateDiaryEntryForm.reset();
    localStorage.removeItem('diaryEntryForEdit');
  }

  get formLoading(){
    return this.isLoading;
  }

  get displayError(){
    return this.errorMessage;
  }

  handleError(error){
    this.errorMessage = error.error.message;
    this.isLoading = false;
  }

}
