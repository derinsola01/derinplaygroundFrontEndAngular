import { Router } from '@angular/router';
import { DiaryService } from './../service/diary.service';
import { Component, OnInit } from '@angular/core';
import { UserDiaryEntry } from '../model/user.diary.entry.model';

@Component({
  selector: 'app-viewentry',
  templateUrl: './viewentry.component.html',
  styleUrls: ['./viewentry.component.css']
})
export class ViewEntryComponent implements OnInit {

  selectedEntry: UserDiaryEntry;

  constructor(private diaryService: DiaryService, private router: Router) { }

  ngOnInit(): void {
    this.getDiaryEntry(this.diaryService.selectedDiaryEntry);
    this.refreshState(this.diaryService.selectedDiaryEntry);
  }

  refreshState(diaryEntry) {
    const isStoredLocally = localStorage.getItem('diaryEntryForView');
    if (!isStoredLocally){
      localStorage.setItem('diaryEntryForView', JSON.stringify(diaryEntry));
    } else {
      this.selectedEntry = JSON.parse(isStoredLocally);
    }
  }

  goBackToDiaryEntries() {
    localStorage.removeItem('diaryEntryForView');
    this.router.navigate(['/diary/listEntries']);
  }

  editDiaryEntry() {
    this.diaryService.diaryEntryForEdit(this.selectedEntry);
    this.router.navigate(['/diary/updateEntry']);
  }

  getDiaryEntry(diaryEntry) {
    this.selectedEntry = diaryEntry;
  }

  get selectedDiaryEntry() {
    return this.selectedEntry;
  }

}
