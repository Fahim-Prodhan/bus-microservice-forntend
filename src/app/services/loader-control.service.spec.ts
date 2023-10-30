import { TestBed } from '@angular/core/testing';

import { LoaderControlService } from './loader-control.service';

describe('LoaderControlService', () => {
  let service: LoaderControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
