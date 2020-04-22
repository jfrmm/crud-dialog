import { Injectable } from '@angular/core';
import { FieldOption } from './models/field-option.model';

@Injectable({
  providedIn: 'root'
})
export class AspFormLibraryService {

  constructor() { }

  public displayField(filterOption?: FieldOption): string | undefined {
    return filterOption ? filterOption.value : undefined;
  }
}
