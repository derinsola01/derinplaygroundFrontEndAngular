import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListGuestsComponent } from './listguests.component';

describe('ListguestsComponent', () => {
  let component: ListGuestsComponent;
  let fixture: ComponentFixture<ListGuestsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGuestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
