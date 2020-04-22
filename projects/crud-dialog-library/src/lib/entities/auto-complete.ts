import { FormControl } from "@angular/forms";
import { Field } from "./field";
import { Observable, of } from "rxjs";
import {
  filter,
  startWith,
  distinctUntilChanged,
  switchMap,
} from "rxjs/operators";
import { FieldOption } from "../models/field-option.model";
import { FieldElement } from "./field-element";

export class AutoCompleteFilter extends Field {
  protected _elements: FieldElement;
  public _options: FieldOption[] = [];

  constructor(
    paramName: string,
    placeholder: string,
    options: FieldOption[],
    initialValue: FieldOption = null,
    size?: number,
    validators?: any[],
    required?: boolean
  ) {
    super(paramName, "autocomplete", options);

    const formControl = new FormControl(initialValue, validators);
    this._options = options;

    this._elements = new FieldElement(
      placeholder,
      formControl,
      this.filterOptions(formControl),
      size,
      required
    );
  }

  private filterOptions(formControl: FormControl): Observable<FieldOption[]> {
    return formControl.valueChanges.pipe(
      /*
       * With startwith the list is displayed as soon as focused
       * without it, it will be empty first time its focused, until user types something
       */
      startWith(""),
      distinctUntilChanged(),
      filter((value) => typeof value === "string"),
      switchMap((fieldTerm: string) =>
        of(
          this._options.filter((option: FieldOption) =>
            option.value.toLowerCase().includes(fieldTerm.toLowerCase())
          )
        )
      )
    );
  }

  protected mapControlsValues(): string {
    return this._elements.formControl.value;
  }

  public clearAllElements(): void {
    this._elements.clear();
  }
}
