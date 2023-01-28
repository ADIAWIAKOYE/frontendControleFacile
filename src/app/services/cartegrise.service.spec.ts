import { TestBed } from '@angular/core/testing';

import { CartegriseService } from './cartegrise.service';

describe('CartegriseService', () => {
  let service: CartegriseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartegriseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
