/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthSvc } from './authentication.service';

describe('Service: Authentication', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthSvc]
    });
  });

  it('should ...', inject([AuthSvc], (service: AuthSvc) => {
    expect(service).toBeTruthy();
  }));
});
