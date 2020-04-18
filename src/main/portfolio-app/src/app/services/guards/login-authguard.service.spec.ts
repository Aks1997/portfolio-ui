import { TestBed } from '@angular/core/testing';

import { LoginAuthguardService } from './login-authguard.service';

describe('LoginAuthguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginAuthguardService = TestBed.get(LoginAuthguardService);
    expect(service).toBeTruthy();
  });
});
