import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLoadingSpinnersComponent } from './authloadingspinners.component';

describe('AuthLoadingSpinnersComponent', () => {
  let component: AuthLoadingSpinnersComponent;
  let fixture: ComponentFixture<AuthLoadingSpinnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthLoadingSpinnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLoadingSpinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
