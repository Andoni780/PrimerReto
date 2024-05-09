import { TestBed } from '@angular/core/testing';

import { LiscenseListerService } from './liscense-lister.service';

describe('LiscenseListerService', () => {
  let service: LiscenseListerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiscenseListerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
