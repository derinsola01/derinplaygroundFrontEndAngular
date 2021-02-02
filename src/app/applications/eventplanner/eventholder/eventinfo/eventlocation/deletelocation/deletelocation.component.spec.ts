import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeleteLocationComponent } from './deletelocation.component';

describe('DeleteLocationComponent', () => {
  let component: DeleteLocationComponent;
  let fixture: ComponentFixture<DeleteLocationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
