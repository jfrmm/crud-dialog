import { FormControl } from '@angular/forms';

import { Field } from '../field/field';
import { FieldElement } from '../field/field-element';
import { FieldValidation } from '../models/field-validation.model';

export class TextArea extends Field {
  protected elements: FieldElement;

  constructor(
    name: string,
    placeholder: string,
    initialValue?: string,
    size?: number,
    fieldValidation?: FieldValidation,
    disabled?: boolean,
    required?: boolean
  ) {
    super(name, 'textArea');
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
      fieldValidation ? fieldValidation.customErrors : []
    );
  }

  protected mapControlsValues(): string {
    return this.elements.getFormControl.value;
  }

  public clearAllElements(): void {
    this.elements.clear();
  }
}
