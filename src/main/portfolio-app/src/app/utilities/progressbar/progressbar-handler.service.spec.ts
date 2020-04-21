import { TestBed } from '@angular/core/testing';

import { ProgressbarHandlerService } from './progressbar-handler.service';

describe('ProgressbarHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgressbarHandlerService = TestBed.get(ProgressbarHandlerService);
    expect(service).toBeTruthy();
  });
});
