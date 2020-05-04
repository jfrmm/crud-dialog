import { FieldElement } from './field-element';
import { FieldOption } from '../models/field-option.model';

export abstract class Field {
  private paramName: string;

  private type: 'input' | 'autocomplete' | 'label' | 'textArea';

  protected elements: FieldElement;

  protected options: FieldOption[];

  get getType(): string {
    return this.type;
  }

  get elems(): FieldElement {
    return this.elements;
  }

  set elems(element: FieldElement) {
    this.elements = element;
  }

  get initialOptions(): FieldOption[] {
    return this.options;
  }

  get param(): string {
    return this.paramName;
  }

  constructor(
    paramName: string,
    type: 'input' | 'autocomplete' | 'label' | 'textArea',
    options?: FieldOption[]
  ) {
    this.paramName = paramName;
    this.options = options;
    this.type = type;
  }
}
