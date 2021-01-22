import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDiaryPasscodeComponent } from './create.diary.passcode.component';

describe('CreateDiaryPasscodeComponent', () => {
  let component: CreateDiaryPasscodeComponent;
  let fixture: ComponentFixture<CreateDiaryPasscodeComponent>;

  beforeEach(async(() => {
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
