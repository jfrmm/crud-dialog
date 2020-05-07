import { AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * Checks if the the inserted value has not
 * spaces only
 *
 * @param {number} [minLength] If it should validate only with a minimum length
 * @returns {ValidatorFn}
 */
export function noSpacesOnlyValidator(minLength?: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    minLength = !minLength ? 0 : minLength;

    if (control.value && control.value.length >= minLength) {
      const newValue = control.value.trim();

      if (newValue.length === 0) {
        return { noSpacesOnly: { value: newValue } };
      }
    }

    return null;
  };
}
