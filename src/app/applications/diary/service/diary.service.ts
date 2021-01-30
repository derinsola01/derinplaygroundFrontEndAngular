import { Injectable } from '@angular/core';
import { UserDiary } from '../model/user.diary.model';
import { DiaryHttpService } from 'src/app/common/httpservices/diary.http.service';
import { tap } from 'rxjs/operators';
import { UserDiaryEntry } from '../model/user.diary.entry.model';
import { AuthService } from 'src/app/auth/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  public userDiary: UserDiary;
  diaryEntry: UserDiaryEntry;

  constructor(private diaryHttpService: DiaryHttpService, private authService: AuthService) { }

  retrieveUserDiary(userId: string, userWebToken: string){
    return this.diaryHttpService.getAllUserDiaryEntries(userId, userWebToken).pipe(tap( responseData => {
      if (responseData) {
        this.populateUserDiary(responseData);
      }
    }));
  }

  diaryEntryForEdit(selectedEntry) {
    this.diaryEntry = selectedEntry;
  }

  diaryEntryForView(dairyEntrySetter) {
    this.diaryEntry = dairyEntrySetter;
  }

  get selectedDiaryEntry() {
    return this.diaryEntry;
  }

  private populateUserDiary(responseData) {
    const diaryEntries = new UserDiary(responseData.userId, responseData.dairyEntries);
    this.userDiary = diaryEntries;
    localStorage.setItem('userDiary', JSON.stringify(this.userDiary));
  }

  autoPopulateDiaryEntries() {
    const diaryHolder: UserDiary = JSON.parse(localStorage.getItem('userDiary'));
    if (!diaryHolder) {
      return;
    }
    this.userDiary = diaryHolder;
  }

  createDiaryEntry(postData, loggedInUserId: string, userWebToken: string) {
    return this.diaryHttpService.createDiaryEntry(postData, loggedInUserId, userWebToken).pipe(tap( responseData => {
      this.populateUserDiary(responseData);
    }));
  }

  createDiaryPassCode(passCode: string, loggedInUserId: string, userWebToken: string) {
    return this.diaryHttpService.createDiaryPassCode(passCode, loggedInUserId, userWebToken).pipe(tap( responseData => {
      this.populateUserDiary(responseData);
    }));
  }

  updateDiary(updatedDiaryEntry: string, diaryEntryDate: Date) {
    return this.diaryHttpService.updateDiaryEntry(updatedDiaryEntry,
       diaryEntryDate, this.authService.authenticatedUser.userId,
       this.authService.authenticatedUser.userWebToken).pipe(tap( responseData => {
          this.populateUserDiary(responseData);
        }));
  }
}
