import { TestBed } from '@angular/core/testing';

import { ModifiervehiculeService } from './modifiervehicule.service';

describe('ModifiervehiculeService', () => {
  let service: ModifiervehiculeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifiervehiculeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
