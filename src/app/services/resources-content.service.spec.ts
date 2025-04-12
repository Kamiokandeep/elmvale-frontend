import { TestBed } from '@angular/core/testing';

import { ResourcesContentService } from './resources-content.service';

describe('ResourcesContentService', () => {
  let service: ResourcesContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourcesContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
