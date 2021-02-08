import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DiaryService } from './../service/diary.service';
import { Component, OnInit } from '@angular/core';
import { UserDiaryResponse } from '../response/diary.response';
import { AuthService } from 'src/app/auth/service/auth.service';
import { DiaryPassCodeResponse } from './diary.passcode.response';

@Component({
  selector: 'app-creatediarypasscode',
  templateUrl: './create.diary.passcode.component.html',
  styleUrls: ['./create.diary.passcode.component.css']
})
export class CreateDiaryPasscodeComponent implements OnInit {

  private isLoading = false;
  passCodeExists: boolean;
  private errorMessage: string = null;

  diaryPassCodeForm = this.formBuilder.group({
    dairyPassCode: ['', [Validators.required]]
  });

  constructor(private diaryService: DiaryService,
              private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.getUserDiaryEntryEncryptor(this.authService.authenticatedUser.userId, this.authService.authenticatedUser.userWebToken);
  }

  getUserDiaryEntryEncryptor(userId: string, userWebToken: string) {
    this.isLoading = true;
    this.diaryService.getDiaryPasscode(userId, userWebToken)
            .subscribe((res: DiaryPassCodeResponse) => {
              this.passCodeExists = res.passCodeExists;
              if (this.passCodeExists === false) {
                this.isLoading = false;
              } else {
                this.isLoading = false;
                this.router.navigate(['/diary/listEntries']);
              }
            });
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
