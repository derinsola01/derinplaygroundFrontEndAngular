import { TestBed } from '@angular/core/testing';

import { GuestHttpService } from './guest.http.service';

describe('GuestHttpService', () => {
  let service: GuestHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
