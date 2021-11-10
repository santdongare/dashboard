import { TestBed } from '@angular/core/testing';

import { TDashService } from './tdash.service';

describe('TDashService', () => {
  let service: TDashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TDashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
