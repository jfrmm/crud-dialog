import { TestBed } from '@angular/core/testing';

import { CrudDialogService } from './crud-dialog.service';

describe('CrudDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudDialogService = TestBed.get(CrudDialogService);
    expect(service).toBeTruthy();
  });
});
