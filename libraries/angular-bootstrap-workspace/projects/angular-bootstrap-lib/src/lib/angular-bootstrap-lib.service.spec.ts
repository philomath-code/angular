import { TestBed } from '@angular/core/testing';

import { AngularBootstrapLibService } from './angular-bootstrap-lib.service';

describe('AngularBootstrapLibService', () => {
  let service: AngularBootstrapLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularBootstrapLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
