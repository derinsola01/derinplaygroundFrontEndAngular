import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListEntriesComponent } from './listentries.component';

describe('ListEntriesComponent', () => {
  let component: ListEntriesComponent;
  let fixture: ComponentFixture<ListEntriesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
