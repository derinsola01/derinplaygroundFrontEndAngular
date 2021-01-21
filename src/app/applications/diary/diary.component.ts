import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/service/auth.service';
import { UserDiary } from './model/user.diary.model';
import { DiaryService } from './service/diary.service';
import { UserDiaryResponse } from './response/diary.response';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  public userDiary: UserDiary = this.diaryService.userDiary;
  private isLoading = false;
  private errorMessage: string = null;

  diaryPassCodeForm = this.formBuilder.group({
    dairyPassCode: ['', [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private diaryService: DiaryService) { }

  ngOnInit(): void {
    this.getDiaryEntries(this.authService.authenticatedUser.userId, this.authService.authenticatedUser.userWebToken);
  }

  get dairyPassCode(){
    return this.diaryPassCodeForm.get('dairyPassCode');
  }

  get formLoading(){
    return this.isLoading;
  }

  getDiaryEntries(userId: string, userWebToken: string) {
    this.isLoading = true;
    if (this.userDiary) {
      this.isLoading = false;
      this.router.navigate(['/diary/listEntries']);
    } else {
      this.diaryService.retrieveUserDiary(userId, userWebToken).subscribe(
        response => {
          console.log('diaryEntries hold: ', response);
          this.userDiary = response;
          this.isLoading = false;
          this.router.navigate(['/diary/listEntries']);
        }
      );
    }
  }

  // onSubmit(){
  //   this.isLoading = true;
  //   this.diaryService.createDiaryPassCode(this.diaryPassCodeForm.value,
  //                                         this.authService.authenticatedUser.userId,
  //                                         this.authService.authenticatedUser.userWebToken)
  //     .subscribe((responseData: UserDiaryResponse ) => {
  //       this.isLoading = false;
  //       this.router.navigate(['listEntries']);
  //   }, error => {
  //       this.handleError(error);
  //   });
  //   this.diaryPassCodeForm.reset();
  // }

  handleError(error){
    this.errorMessage = error.error.message;
    this.isLoading = false;
  }

}
