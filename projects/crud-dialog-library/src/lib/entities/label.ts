import { Field } from "./field";
import { FieldElement } from "./field-element";

export class LabelField extends Field {
  protected _elements: FieldElement;

  constructor(name: string, size?: number) {
    super(name, "label");
    this._elements = new FieldElement(name, null, null, size);
  }
}
