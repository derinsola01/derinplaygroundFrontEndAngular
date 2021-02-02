import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateDiaryPasscodeComponent } from './create.diary.passcode.component';

describe('CreateDiaryPasscodeComponent', () => {
  let component: CreateDiaryPasscodeComponent;
  let fixture: ComponentFixture<CreateDiaryPasscodeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDiaryPasscodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDiaryPasscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
