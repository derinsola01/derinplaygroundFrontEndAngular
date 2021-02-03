import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModifyEventComponent } from './modifyevent.component';

describe('ModifyEventComponent', () => {
  let component: ModifyEventComponent;
  let fixture: ComponentFixture<ModifyEventComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
