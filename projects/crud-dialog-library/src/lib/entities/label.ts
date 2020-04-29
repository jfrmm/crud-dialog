import { Field } from '../field/field';
import { FieldElement } from '../field/field-element';

export class LabelField extends Field {
  protected elements: FieldElement;

  constructor(name: string, size?: number) {
    super(name, 'label');
    this.elements = new FieldElement(name, null, null, size);
  }
}
