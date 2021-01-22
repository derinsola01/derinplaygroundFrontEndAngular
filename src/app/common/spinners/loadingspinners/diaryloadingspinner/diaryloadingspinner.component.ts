import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diaryloadingspinner',
  template: '<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
  styleUrls: ['./diaryloadingspinner.component.css']
})
export class DiaryLoadingSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
