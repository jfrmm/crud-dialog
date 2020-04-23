import { FormControl } from "@angular/forms";
import { Field } from "../field/field";
import { FieldElement } from "../field/field-element";

export class InputField extends Field {
  protected elements: FieldElement;

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
    this.elements = new FieldElement(
      placeholder,
      formControl,
      null,
      size,
      required
    );
  }

  protected mapControlsValues(): string {
    return this.elements.getFormControl.value;
  }

  public clearAllElements(): void {
    this.elements.clear();
  }
}
