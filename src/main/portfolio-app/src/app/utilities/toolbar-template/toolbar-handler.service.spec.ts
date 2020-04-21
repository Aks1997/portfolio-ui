import { TestBed } from '@angular/core/testing';

import { ToolbarHandlerService } from './toolbar-handler.service';

describe('ToolbarHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToolbarHandlerService = TestBed.get(ToolbarHandlerService);
    expect(service).toBeTruthy();
  });
});
