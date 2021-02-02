import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppsLandingComponent } from './appslanding.component';

describe('AppslandingComponent', () => {
  let component: AppsLandingComponent;
  let fixture: ComponentFixture<AppsLandingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
