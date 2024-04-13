import { TestBed } from '@angular/core/testing';

import { ShrimpService } from './shrimp.service';

describe('ShrimpService', () => {
  let service: ShrimpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShrimpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
