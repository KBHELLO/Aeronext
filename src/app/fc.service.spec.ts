import { TestBed } from '@angular/core/testing';

import { FcService } from './fc.service';

describe('FcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FcService = TestBed.get(FcService);
    expect(service).toBeTruthy();
  });
});
