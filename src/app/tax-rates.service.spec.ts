import { TestBed } from '@angular/core/testing';

import { TaxRatesService } from './tax-rates.service';

describe('TaxRatesService', () => {
  let service: TaxRatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxRatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
