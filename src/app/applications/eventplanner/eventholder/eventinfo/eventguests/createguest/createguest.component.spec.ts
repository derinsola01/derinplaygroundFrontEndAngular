import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateGuestComponent } from './createguest.component';

describe('CreateGuestComponent', () => {
  let component: CreateGuestComponent;
  let fixture: ComponentFixture<CreateGuestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
