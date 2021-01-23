import { PlayGroundUser } from 'src/app/common/user/playgrounduser/userModel/PlaygroundUser.model';
import { Router } from '@angular/router';
import { DiaryService } from './../service/diary.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-createentry',
  templateUrl: './createentry.component.html',
  styleUrls: ['./createentry.component.css']
})
export class CreateEntryComponent implements OnInit {

  diaryEntryForm = this.formBuilder.group({
    entryDate: ['', [Validators.required]],
    dairyEntry: ['', [Validators.required]]
  });

  private isLoading = false;
  private errorMessage: string = null;

  constructor(private formBuilder: FormBuilder,
              private dairyService: DiaryService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  get entryDate(){
    return this.diaryEntryForm.get('entryDate');
  }

  get dairyEntry(){
    return this.diaryEntryForm.get('dairyEntry');
  }

  get formLoading(){
    return this.isLoading;
  }

  get displayError(){
    return this.errorMessage;
  }

  onSubmit(){
    this.isLoading = true;
    const loggedInUserId = this.authService.authenticatedUser.userId;
    const userWebToken = this.authService.authenticatedUser.userWebToken;
    this.dairyService.createDiaryEntry(this.diaryEntryForm.value, loggedInUserId, userWebToken).subscribe((responseData ) => {
      console.log('responseData is: ', responseData);
      this.isLoading = false;
      this.router.navigate(['/diary/listEntries']);
    }, error => {
      this.handleError(error);
    });
    this.diaryEntryForm.reset();
  }

  handleError(error){
    this.errorMessage = error.error.message;
    this.isLoading = false;
  }

}
