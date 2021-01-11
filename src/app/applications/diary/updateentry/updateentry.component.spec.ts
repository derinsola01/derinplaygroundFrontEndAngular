import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateEntryComponent } from './updateentry.component';

describe('UpdateentryComponent', () => {
  let component: UpdateEntryComponent;
  let fixture: ComponentFixture<UpdateEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
