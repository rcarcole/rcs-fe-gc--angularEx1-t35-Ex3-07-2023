import { TestBed } from '@angular/core/testing';

import { AdminArtService } from './admin-art.service';

describe('AdminArtService', () => {
  let service: AdminArtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminArtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
