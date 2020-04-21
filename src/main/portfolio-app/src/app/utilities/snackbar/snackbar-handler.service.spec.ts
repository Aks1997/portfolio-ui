import { TestBed } from '@angular/core/testing';

import { SnackbarHandlerService } from './snackbar-handler.service';

describe('SnackbarHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnackbarHandlerService = TestBed.get(SnackbarHandlerService);
    expect(service).toBeTruthy();
  });
});
