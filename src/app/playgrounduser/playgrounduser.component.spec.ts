import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygrounduserComponent } from './playgrounduser.component';

describe('PlaygrounduserComponent', () => {
  let component: PlaygrounduserComponent;
  let fixture: ComponentFixture<PlaygrounduserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygrounduserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygrounduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
