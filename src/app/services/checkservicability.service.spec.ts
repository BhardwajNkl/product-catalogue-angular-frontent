import { TestBed } from '@angular/core/testing';

import { CheckservicabilityService } from './checkservicability.service';

describe('CheckservicabilityService', () => {
  let service: CheckservicabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckservicabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
