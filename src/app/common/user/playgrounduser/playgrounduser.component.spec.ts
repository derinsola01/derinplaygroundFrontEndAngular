import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlayGroundUserComponent } from './playgrounduser.component';

describe('PlayGroundUserComponent', () => {
  let component: PlayGroundUserComponent;
  let fixture: ComponentFixture<PlayGroundUserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayGroundUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayGroundUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
