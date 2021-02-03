import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeleteGuestComponent } from './deleteguest.component';

describe('DeleteGuestComponent', () => {
  let component: DeleteGuestComponent;
  let fixture: ComponentFixture<DeleteGuestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
