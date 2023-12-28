import { TestBed } from '@angular/core/testing';

import { GetproductdetailService } from './getproductdetail.service';

describe('GetproductdetailService', () => {
  let service: GetproductdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetproductdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
