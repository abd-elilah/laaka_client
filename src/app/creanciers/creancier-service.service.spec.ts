import { TestBed } from '@angular/core/testing';

import { CreancierServiceService } from './creancier-service.service';

describe('CreancierServiceService', () => {
  let service: CreancierServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreancierServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
