import { TestBed } from '@angular/core/testing';

import { DiaryHttpService } from './diary.http.service';

describe('DiaryHttpService', () => {
  let service: DiaryHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiaryHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
