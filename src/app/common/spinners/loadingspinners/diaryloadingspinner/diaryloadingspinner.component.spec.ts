import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryLoadingSpinnerComponent } from './diaryloadingspinner.component';

describe('DiaryLoadingSpinnerComponent', () => {
  let component: DiaryLoadingSpinnerComponent;
  let fixture: ComponentFixture<DiaryLoadingSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryLoadingSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryLoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
