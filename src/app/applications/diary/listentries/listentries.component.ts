import { Router } from '@angular/router';
import { DiaryService } from './../service/diary.service';
import { Component, OnInit } from '@angular/core';
import { UserDiary } from '../model/user.diary.model';
import { UserDiaryEntry } from '../model/user.diary.entry.model';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-listentries',
  templateUrl: './listentries.component.html',
  styleUrls: ['./listentries.component.css']
})
export class ListEntriesComponent implements OnInit {

  userDiaryEntries: UserDiary;
  selectedEntry: UserDiaryEntry;
  isLoading = false;
  public userDiary: UserDiary;

  searchEntryForm = this.formBuilder.group({
    searchText: ['', []]
  });

  constructor(
    private formBuilder: FormBuilder,
    private diaryService: DiaryService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDiaryEntries(this.authService.authenticatedUser.userId, this.authService.authenticatedUser.userWebToken);
  }

  getDiaryEntries(userId: string, userWebToken: string) {
    this.isLoading = true;
    this.diaryService.retrieveUserDiary(userId, userWebToken).subscribe(
      response => {
        this.isLoading = false;
        if (response){
          console.log('diaryEntries hold: ', response);
          this.userDiary = response;
        }
      }
    );
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
    this.searchEntryForm.reset();
  }

}
