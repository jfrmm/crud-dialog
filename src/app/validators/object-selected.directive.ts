import { AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * Check if an object is selected
 *
 * @returns {ValidatorFn}
 */
export function objectSelectedValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value) {
      if (control.value === null || typeof control.value !== 'object') {
        return { onlyObject: { value: false } };
      }
    }

    return null;
  };
}
