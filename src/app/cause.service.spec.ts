import { TestBed, inject } from '@angular/core/testing';

import { CauseService } from './cause.service';

describe('CauseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CauseService]
    });
  });

  it('should be created', inject([CauseService], (service: CauseService) => {
    expect(service).toBeTruthy();
  }));
});
