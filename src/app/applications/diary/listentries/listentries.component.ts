import { Router } from '@angular/router';
import { DiaryService } from './../service/diary.service';
import { Component, OnInit } from '@angular/core';
import { UserDiary } from '../model/user.diary.model';
import { UserDiaryEntry } from '../model/user.diary.entry.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-listentries',
  templateUrl: './listentries.component.html',
  styleUrls: ['./listentries.component.css']
})
export class ListEntriesComponent implements OnInit {

  userDiaryEntries: UserDiary;
  selectedEntry: UserDiaryEntry;

  searchEntryForm = this.formBuilder.group({
    searchText: ['', []]
  });

  constructor(private formBuilder: FormBuilder, private diaryService: DiaryService, private router: Router) { }

  ngOnInit(): void {
  }

  get searchText(){
    return this.searchEntryForm.get('searchText');
  }

  get dairyEntries() {
    this.userDiaryEntries = null;
    return this.userDiaryEntries = this.diaryService.userDiary;
  }

  onSelect(entry: UserDiaryEntry): void {
    this.selectedEntry = entry;
    this.diaryService.diaryEntryForView(this.selectedEntry);
    this.router.navigate(['/diary/viewEntry']);
  }

  searchForEntry() {
    console.log('this.searchEntryForm holds: ', this.searchEntryForm.value);
    const searchText = this.searchEntryForm.value.searchText;
    // const entriesHolder = this.dairyEntries.dairyEntries;  // .includes(this.searchEntryForm.value.value);
    // const array = [1, 2, 3];
    // entriesHolder.forEach(function (value) {
    //   console.log(value);
    // });
    // console.log('found is: ', found);
    this.searchEntryForm.reset();
  }

}
