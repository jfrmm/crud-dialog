import { TestBed } from '@angular/core/testing';

import { FieldHelperService } from './field-helper.service';

describe('FieldHelperService', () => {
  let service: FieldHelperService;
  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    service = TestBed.get(FieldHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should display option`, () => {
    expect(service.displayField(null)).toBeUndefined();

    expect(service.displayField({id: 1, value: 'test'})).toBe('test');
  });
});
