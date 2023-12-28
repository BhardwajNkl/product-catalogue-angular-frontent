import { TestBed } from '@angular/core/testing';

import { GetsearchresultService } from './getsearchresult.service';

describe('GetsearchresultService', () => {
  let service: GetsearchresultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetsearchresultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
