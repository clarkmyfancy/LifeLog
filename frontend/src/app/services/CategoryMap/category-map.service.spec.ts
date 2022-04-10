import { TestBed } from '@angular/core/testing';

import { CategoryMapService } from './category-map.service';

describe('SubcategoryMapService', () => {
  let service: CategoryMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
