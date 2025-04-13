import { TestBed } from '@angular/core/testing';

import { GalleryContentService } from './gallery-content.service';

describe('GalleryContentService', () => {
  let service: GalleryContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleryContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
