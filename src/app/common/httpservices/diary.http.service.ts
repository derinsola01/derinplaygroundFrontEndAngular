import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDiaryResponse } from 'src/app/applications/diary/response/diary.response';

@Injectable({
  providedIn: 'root'
})
export class DiaryHttpService {

  constructor(private httpClient: HttpClient) { }

  private authHeaderOptions(userWebToken: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': ['POST', 'GET', 'OPTIONS'],
        'Access-Control-Allow-Headers': 'Content-Type, application/json',
        Authorization: userWebToken
      })
    };
    return httpOptions;
  }

  getAllUserDiaryEntries(loggedInUserId: string, userWebToken: string) {
    const postData = { userId: loggedInUserId };
    const httpOptions = this.authHeaderOptions(userWebToken);
    return this.httpClient.post<UserDiaryResponse>('http://spring-cloud-gateway:8900/diary/userDiaryEntries', postData, httpOptions);
  }

  getDiaryPasscode(loggedInUserId: string, userWebToken: string) {
    const postData = { userId: loggedInUserId };
    const httpOptions = this.authHeaderOptions(userWebToken);
    return this.httpClient.post('http://localhost:8900/diary/getDiaryPasscode', postData, httpOptions);
  }

  createDiaryEntry(formData, loggedInUserId: string, userWebToken: string){
    const postData = {
      userId: loggedInUserId,
      diaryEntry: formData.dairyEntry,
      diaryEntryDate: formData.entryDate
    };
    const httpOptions = this.authHeaderOptions(userWebToken);
    return this.httpClient.post<UserDiaryResponse>('http://localhost:8900/diary/createEntry', postData, httpOptions);
  }

  createDiaryPassCode(diaryPassCode: string, loggedInUserId: string, userWebToken: string) {
    const postData = { userId: loggedInUserId, passCode: diaryPassCode };
    const httpOptions = this.authHeaderOptions(userWebToken);
    return this.httpClient.post<UserDiaryResponse>('http://localhost:8900/diary/createPasscode', postData, httpOptions);
  }

  updateDiaryEntry(updatedDiaryEntry: string, date: Date, loggedInUserId: string, userWebToken: string) {
      const postData = { userId: loggedInUserId, diaryEntry: updatedDiaryEntry, diaryEntryDate: date };
      const httpOptions = this.authHeaderOptions(userWebToken);
      return this.httpClient.post<UserDiaryResponse>('http://localhost:8900/diary/updateDiaryEntry', postData, httpOptions);
    }

}
