import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DiaryService } from './../service/diary.service';
import { Component, OnInit } from '@angular/core';
import { UserDiary } from '../model/user.diary.model';
import { UserDiaryResponse } from '../response/diary.response';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-creatediarypasscode',
  templateUrl: './create.diary.passcode.component.html',
  styleUrls: ['./create.diary.passcode.component.css']
})
export class CreateDiaryPasscodeComponent implements OnInit {

  public userDiary: UserDiary;
  private isLoading = false;
  private errorMessage: string = null;

  diaryPassCodeForm = this.formBuilder.group({
    dairyPassCode: ['', [Validators.required]]
  });

  constructor(private diaryService: DiaryService,
              private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.getDiaryEntries(this.authService.authenticatedUser.userId, this.authService.authenticatedUser.userWebToken);
  }

  getDiaryEntries(userId: string, userWebToken: string) {
    this.isLoading = true;
    if (localStorage.getItem('userDiary')) {
      this.isLoading = false;
      this.router.navigate(['/diary/listEntries']);
    } else {
      this.diaryService.retrieveUserDiary(userId, userWebToken).subscribe(
        response => {
          this.isLoading = false;
          if (response){
            console.log('diaryEntries hold: ', response);
            this.userDiary = response;
            this.router.navigate(['/diary/listEntries']);
          }
        }
      );
    }
  }

  get dairyPassCode(){
    return this.diaryPassCodeForm.get('dairyPassCode');
  }

  get displayError(){
    return this.errorMessage;
  }

  get formLoading(){
    return this.isLoading;
  }

  onSubmit(){
    this.isLoading = true;
    this.diaryService.createDiaryPassCode(this.diaryPassCodeForm.value.dairyPassCode,
                                          this.authService.authenticatedUser.userId,
                                          this.authService.authenticatedUser.userWebToken)
      .subscribe((responseData: UserDiaryResponse ) => {
        this.isLoading = false;
        this.router.navigate(['/diary/listEntries']);
    }, error => {
        this.handleError(error);
    });
    this.diaryPassCodeForm.reset();
  }

  handleError(error){
    this.errorMessage = error.error.message;
    this.isLoading = false;
  }

}
