import { TestBed } from '@angular/core/testing';

import { EventsContentService } from './events-content.service';

describe('EventsContentService', () => {
  let service: EventsContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
