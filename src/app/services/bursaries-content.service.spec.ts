import { TestBed } from '@angular/core/testing';

import { BursariesContentService } from './bursaries-content.service';

describe('BursariesContentService', () => {
  let service: BursariesContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BursariesContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
