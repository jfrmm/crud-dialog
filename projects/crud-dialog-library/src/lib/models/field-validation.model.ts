import { ValidatorFn } from '@angular/forms';
import { ErrorsType } from 'crud-dialog-library/lib/models/errors-type.model';

export interface FieldValidation {
  validators: ValidatorFn[],
  customErrors?: ErrorsType[]
}
