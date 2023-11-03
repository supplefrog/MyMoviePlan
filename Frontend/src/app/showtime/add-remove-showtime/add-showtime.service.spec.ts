import { TestBed } from '@angular/core/testing';

import { AddShowtimeService } from './add-showtime.service';

describe('AddShowtimeService', () => {
  let service: AddShowtimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddShowtimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
