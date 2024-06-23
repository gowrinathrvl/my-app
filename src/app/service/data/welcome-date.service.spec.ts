import { TestBed } from '@angular/core/testing';

import { WelcomeDateService } from './welcome-date.service';

describe('WelcomeDateService', () => {
  let service: WelcomeDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelcomeDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
