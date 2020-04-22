import { Injectable } from "@angular/core";
import { FieldOption } from "../models/field-option.model";

@Injectable({
  providedIn: "root",
})
export class FieldHelperService {
  constructor() {}

  public compareFn(o1: FieldOption, o2: FieldOption): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  public displayField(filterOption?: FieldOption): string | undefined {
    return filterOption ? filterOption.value : undefined;
  }
}
