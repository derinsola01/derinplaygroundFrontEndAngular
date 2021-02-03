import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewLocationComponent } from './viewlocation.component';

describe('ViewLocationComponent', () => {
  let component: ViewLocationComponent;
  let fixture: ComponentFixture<ViewLocationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
