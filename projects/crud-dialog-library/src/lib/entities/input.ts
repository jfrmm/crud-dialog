import { FormControl } from '@angular/forms';

import { Field } from '../field/field';
import { FieldElement } from '../field/field-element';
import { FieldValidation } from '../models/field-validation.model';

export class InputField extends Field {
  protected elements: FieldElement;

  constructor(
    name: string,
    placeholder: string,
    initialValue?: string | number,
    size?: number,
    fieldValidation?: FieldValidation,
    disabled?: boolean,
    required?: boolean
  ) {
    super(name, 'input');
    const formControl = new FormControl(
      { value: initialValue, disabled },
      fieldValidation ? fieldValidation.validators : []
    );
    this.elements = new FieldElement(
      placeholder,
      formControl,
      null,
      size,
      required,
      fieldValidation ? fieldValidation : null
    );
  }

  protected mapControlsValues(): string {
    return this.elements.getFormControl.value;
  }

  public clearAllElements(): void {
    this.elements.clear();
  }
}
