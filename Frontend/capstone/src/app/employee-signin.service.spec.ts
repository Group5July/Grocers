import { TestBed } from '@angular/core/testing';

import { EmployeeSigninService } from './employee-signin.service';

describe('EmployeeSigninService', () => {
  let service: EmployeeSigninService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeSigninService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
