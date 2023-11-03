import { TestBed } from '@angular/core/testing';

import { ShowtimeListService } from './showtime-list.service';

describe('ShowtimeListService', () => {
  let service: ShowtimeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowtimeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
