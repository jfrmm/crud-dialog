import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { FieldOption } from "../models/field-option.model";

export class FieldElement {
  private _formControl: FormControl;

  private _placeholder: string;

  private _options: Observable<FieldOption[]>;

  private _size: number;

  private _required: boolean;

  get formControl(): FormControl {
    return this._formControl;
  }

  get required(): boolean {
    return this._required;
  }

  get size(): number {
    return this._size;
  }

  get placeholder(): string {
    return this._placeholder;
  }

  get options(): Observable<FieldOption[]> {
    return this._options;
  }

  constructor(
    placeholder: string,
    formControl: FormControl,
    options: any,
    size?: number,
    required?: boolean
  ) {
    this._placeholder = placeholder;
    this._formControl = formControl;
    this._options = options;
    this._size = size;
    this._required = required;
  }

  public clear(): void {
    this._formControl.setValue(null);
  }
}
