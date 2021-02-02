import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UpdateGuestComponent } from './updateguest.component';

describe('UpdateGuestComponent', () => {
  let component: UpdateGuestComponent;
  let fixture: ComponentFixture<UpdateGuestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
