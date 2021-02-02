import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListLocationsComponent } from './listlocations.component';

describe('ListLocationsComponent', () => {
  let component: ListLocationsComponent;
  let fixture: ComponentFixture<ListLocationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
