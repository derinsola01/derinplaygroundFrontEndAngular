import { Injectable } from '@angular/core';
import { UserDiary } from '../model/user.diary.model';
import { DiaryHttpService } from 'src/app/common/httpservices/diary.http.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  public userDiary: UserDiary;

  constructor(private diaryHttpService: DiaryHttpService) { }

  retrieveUserDiary(userId: string, userWebToken: string){
    return this.diaryHttpService.getAllUserDiaryEntries(userId, userWebToken).pipe(tap( responseData => {
      this.populateUserDiary(responseData);
    }));
  }

  private populateUserDiary(responseData) {
    const diaryEntries = new UserDiary(responseData.userId, responseData.dairyEntries);
    this.userDiary = diaryEntries;
    localStorage.setItem('userDiary', JSON.stringify(this.userDiary));
  }

  createDiaryEntry(postData, loggedInUserId: string, userWebToken: string) {
    return this.diaryHttpService.createDiaryEntry(postData, loggedInUserId, userWebToken).pipe(tap( responseData => {
      this.populateUserDiary(responseData);
    }));
  }

  // createDiaryPassCode(passCode: string, loggedInUserId: string, userWebToken: string) {
  //   return this.diaryHttpService.createDiaryPassCode(passCode, loggedInUserId, userWebToken).pipe(tap( responseData => {
  //     this.populateUserDiary(responseData);
  //   }));
  // }
}
