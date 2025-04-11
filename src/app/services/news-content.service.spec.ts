import { TestBed } from '@angular/core/testing';

import { NewsContentService } from './news-content.service';

describe('NewsContentService', () => {
  let service: NewsContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
