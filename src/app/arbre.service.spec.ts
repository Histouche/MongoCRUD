import { TestBed } from '@angular/core/testing';

import { ArbreService } from './arbre.service';

describe('ArbreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArbreService = TestBed.get(ArbreService);
    expect(service).toBeTruthy();
  });
});
