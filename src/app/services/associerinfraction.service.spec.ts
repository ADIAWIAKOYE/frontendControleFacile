import { TestBed } from '@angular/core/testing';

import { AssocierinfractionService } from './associerinfraction.service';

describe('AssocierinfractionService', () => {
  let service: AssocierinfractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssocierinfractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
