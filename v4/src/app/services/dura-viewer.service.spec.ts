import { TestBed } from '@angular/core/testing';

import { DuraViewerService } from './dura-viewer.service';

describe('DuraViewerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DuraViewerService = TestBed.get(DuraViewerService);
    expect(service).toBeTruthy();
  });
});
