import { ValidatorFn } from '@angular/forms';
import { ErrorsType } from './errors-type.model';

export interface FieldValidation {
  validators: ValidatorFn[],
  customErrors?: ErrorsType[]
}
