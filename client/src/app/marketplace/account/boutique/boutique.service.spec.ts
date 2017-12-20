import { TestBed, inject } from '@angular/core/testing';

import { BoutiqueService } from './boutique.service';

describe('BoutiqueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoutiqueService]
    });
  });

  it('should be created', inject([BoutiqueService], (service: BoutiqueService) => {
    expect(service).toBeTruthy();
  }));
});
