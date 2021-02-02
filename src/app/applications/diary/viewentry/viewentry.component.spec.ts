import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewEntryComponent } from './viewentry.component';

describe('ViewEntryComponent', () => {
  let component: ViewEntryComponent;
  let fixture: ComponentFixture<ViewEntryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
