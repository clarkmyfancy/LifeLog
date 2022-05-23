import { TestBed } from '@angular/core/testing';

import { TheOneThingService } from './the-one-thing.service';

describe('TheOneThingService', () => {
  let service: TheOneThingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheOneThingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
