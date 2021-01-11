import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayGroundUserComponent } from './playgrounduser.component';

describe('PlayGroundUserComponent', () => {
  let component: PlayGroundUserComponent;
  let fixture: ComponentFixture<PlayGroundUserComponent>;

  beforeEach(async(() => {
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
