/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FeaturedDealsService } from './featured-deals.service';

describe('FeaturedDealsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeaturedDealsService]
    });
  });

  it('should ...', inject([FeaturedDealsService], (service: FeaturedDealsService) => {
    expect(service).toBeTruthy();
  }));
});
