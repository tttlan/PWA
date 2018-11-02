import { TestBed, inject } from '@angular/core/testing';

import { NoAuthGuard } from './no-auth.guard';

describe('NoAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoAuthGuard]
    });
  });

  it('should be created', inject([NoAuthGuard], (service: NoAuthGuard) => {
    expect(service).toBeTruthy();
  }));
});
