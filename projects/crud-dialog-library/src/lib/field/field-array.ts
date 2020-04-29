import { Field } from './field';

export class FieldArray extends Array<Field> {
  private hasDuplicate(): boolean {
    return new Set(this.map((field) => field.param)).size !== this.length;
  }

  public get(name: string): Field {
    return this.find((field) => field.param === name);
  }

  public push(...items: Field[]): number {
    const newArrayLength = super.push(...items);
    if (this.hasDuplicate()) {
      throw new Error('Duplicated field name');
    }
    return newArrayLength;
  }
}
