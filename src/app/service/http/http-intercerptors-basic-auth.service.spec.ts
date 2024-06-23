import { TestBed } from '@angular/core/testing';

import { HttpIntercerptorsBasicAuthService } from './http-intercerptors-basic-auth.service';

describe('HttpIntercerptorsBasicAuthService', () => {
  let service: HttpIntercerptorsBasicAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpIntercerptorsBasicAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
