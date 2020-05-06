import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import {
  filter,
  startWith,
  distinctUntilChanged,
  switchMap,
} from 'rxjs/operators';

import { Field } from '../field/field';
import { FieldOption } from '../models/field-option.model';
import { FieldElement } from '../field/field-element';
import { FieldValidation } from '../models/field-validation.model';

export class AutoCompleteField extends Field {
  protected elements: FieldElement;
  public options: FieldOption[] = [];

  constructor(
    paramName: string,
    placeholder: string,
    options: FieldOption[],
    initialValue: FieldOption = null,
    size?: number,
    fieldValidation?: FieldValidation,
    required?: boolean
  ) {
    super(paramName, 'autocomplete', options);

    const formControl = new FormControl(initialValue, fieldValidation ? fieldValidation.validators: []);
    this.options = options;

    this.elements = new FieldElement(
      placeholder,
      formControl,
      this.fieldOptions(formControl),
      size,
      required,
      fieldValidation ? fieldValidation : null
    );
  }

  private fieldOptions(formControl: FormControl): Observable<FieldOption[]> {
    return formControl.valueChanges.pipe(
      /*
       * With startwith the list is displayed as soon as focused
       * without it, it will be empty first time its focused, until user types something
       */
      startWith(''),
      distinctUntilChanged(),
      filter((value) => typeof value === 'string'),
      switchMap((fieldTerm: string) =>
        of(
          this.options.filter((option: FieldOption) =>
            option.value.toLowerCase().includes(fieldTerm.toLowerCase())
          )
        )
      )
    );
  }

  protected mapControlsValues(): string {
    return this.elements.getFormControl.value;
  }

  public clearAllElements(): void {
    this.elements.clear();
  }
}
