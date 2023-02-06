import { TestBed } from '@angular/core/testing';

import { InformationpolicierService } from './informationpolicier.service';

describe('InformationpolicierService', () => {
  let service: InformationpolicierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformationpolicierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
