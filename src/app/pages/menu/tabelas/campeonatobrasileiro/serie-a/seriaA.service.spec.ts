/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SeriaAService } from './seriaA.service';

describe('Service: SeriaA', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeriaAService]
    });
  });

  it('should ...', inject([SeriaAService], (service: SeriaAService) => {
    expect(service).toBeTruthy();
  }));
});
