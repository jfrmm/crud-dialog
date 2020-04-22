import { FormControl } from "@angular/forms";
import { Field } from "./field";
import { FieldElement } from "./field-element";

export class InputField extends Field {
  protected _elements: FieldElement;

  constructor(
    name: string,
    placeholder: string,
    initialValue?: string,
    size?: number,
    disabled?: boolean,
    validators?: any[],
    required?: boolean
  ) {
    super(name, "input");
    const formControl = new FormControl(
      { value: initialValue, disabled },
      validators
    );
    this._elements = new FieldElement(
      placeholder,
      formControl,
      null,
      size,
      required
    );
  }

  protected mapControlsValues(): string {
    return this._elements.formControl.value;
  }

  public clearAllElements(): void {
    this._elements.clear();
  }
}
