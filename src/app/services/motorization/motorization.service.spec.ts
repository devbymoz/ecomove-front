import { TestBed } from '@angular/core/testing';

import { MotorizationService } from './motorization.service';

describe('MotorizationService', () => {
  let service: MotorizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotorizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
