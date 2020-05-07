import { AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * Checks if the the inserted value is an integer
 *
 * @returns {ValidatorFn}
 */
export function onlyIntegersValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const pattern = new RegExp('^[0-9][0-9]*$');

    if (!pattern.test(control.value)) {
      return { onlyIntegers: { valid: false } };
    }

    return null;
  };
}
