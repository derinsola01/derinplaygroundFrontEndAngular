import { Router } from '@angular/router';
import { DiaryService } from './../service/diary.service';
import { Component, OnInit } from '@angular/core';
import { UserDiary } from '../model/user.diary.model';
import { UserDiaryEntries } from '../model/user.diary.entries.model';

@Component({
  selector: 'app-listentries',
  templateUrl: './listentries.component.html',
  styleUrls: ['./listentries.component.css']
})
export class ListEntriesComponent implements OnInit {

  userDiaryEntries: UserDiary;
  selectedEntry: UserDiaryEntries;

  constructor(private diaryService: DiaryService, private router: Router) { }

  ngOnInit(): void {
  }

  get dairyEntries() {
    return this.userDiaryEntries = this.diaryService.userDiary;
  }

  onSelect(entry: UserDiaryEntries): void {
    this.selectedEntry = entry;
    console.log('this.selectedEntry is: ', this.selectedEntry);
    this.diaryService.diaryEntryForView(this.selectedEntry);
    this.router.navigate(['/diary/viewEntry']);
  }

}
