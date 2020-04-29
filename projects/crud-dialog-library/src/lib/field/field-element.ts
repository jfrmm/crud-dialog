import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { FieldOption } from '../models/field-option.model';
import { FieldEvent } from '../events/field-event';
import { FieldEnabledEvent } from '../events/field-enabled-event';
import { FieldDisabledEvent } from '../events/field-disabled-event';

export class FieldElement {
  private formControl: FormControl;

  private placeholder: string;

  private options: Observable<FieldOption[]>;

  private size: number;

  private required: boolean;

  get getFormControl(): FormControl {
    return this.formControl;
  }

  get getRequired(): boolean {
    return this.required;
  }

  get getSize(): number {
    return this.size;
  }

  get getPlaceholder(): string {
    return this.placeholder;
  }

  get getOptions(): Observable<FieldOption[]> {
    return this.options;
  }

  constructor(
    placeholder: string,
    formControl: FormControl,
    options: any,
    size?: number,
    required?: boolean
  ) {
    this.placeholder = placeholder;
    this.formControl = formControl;
    this.options = options;
    this.size = size;
    this.required = required;
  }

  public clear(): void {
    this.formControl.setValue(null);
  }

  public disableField(): FieldEvent {
    this.formControl.disable({ onlySelf: true, emitEvent: false });

    return new FieldDisabledEvent(this);
  }

  public enableField(): FieldEvent {
    this.formControl.enable({ onlySelf: true, emitEvent: false });

    return new FieldEnabledEvent(this);
  }
}