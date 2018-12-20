import { TestBed } from '@angular/core/testing';

import { DepartmentDetailService } from './department-detail.service';

describe('DepartmentDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepartmentDetailService = TestBed.get(DepartmentDetailService);
    expect(service).toBeTruthy();
  });
});
