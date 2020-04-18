import { TestBed } from '@angular/core/testing';

import { UserMaintainanceService } from './user-maintainance.service';

describe('UserMaintainanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserMaintainanceService = TestBed.get(UserMaintainanceService);
    expect(service).toBeTruthy();
  });
});
