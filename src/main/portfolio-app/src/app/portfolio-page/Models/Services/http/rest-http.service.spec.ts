import { TestBed } from '@angular/core/testing';

import { RestHttpService } from './rest-http.service';

describe('RestHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestHttpService = TestBed.get(RestHttpService);
    expect(service).toBeTruthy();
  });
});
