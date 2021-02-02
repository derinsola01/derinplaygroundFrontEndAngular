import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/service/auth.service';
import { UserDiary } from './model/user.diary.model';
import { DiaryService } from './service/diary.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  public userDiary: UserDiary = this.diaryService.userDiary;

  constructor(private diaryService: DiaryService) { }

  ngOnInit(): void {
    this.diaryService.autoPopulateDiaryEntries();
  }

}
