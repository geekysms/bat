import { TestBed } from '@angular/core/testing';

import { FireDocService } from './fire-doc.service';

describe('FireDocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FireDocService = TestBed.get(FireDocService);
    expect(service).toBeTruthy();
  });
});
