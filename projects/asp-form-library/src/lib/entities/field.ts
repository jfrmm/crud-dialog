import { FieldElement } from './field-element';
import { FieldOption } from '../models/field-option.model';

export abstract class Field {
  private _paramName: string;

  private _type: 'input' | 'autocomplete' | 'label';

  protected _elements: FieldElement;

  protected options: FieldOption[];

  get elements(): FieldElement {
    return this._elements;
  }

  set elements(element: FieldElement) {
    this._elements = element;
  }

  get initialOptions(): FieldOption[] {
    return this.options;
  }

  get paramName(): string {
    return this._paramName;
  }

  get type(): 'input' | 'autocomplete' | 'label' {
    return this._type;
  }

  constructor(paramName: string, type: 'input' | 'autocomplete' | 'label', options?: FieldOption[]) {
    this._paramName = paramName;
    this.options = options;
    this._type = type;
  }
}
