import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';

import { Field } from './field/field';
import { FieldHelperService } from './services/field-helper.service';
import { Subject } from 'rxjs';
import { FieldArray } from './field/field-array';

@Component({
  selector: 'asp-crud-dialog',
  templateUrl: './crud-dialog.component.html',
  styles: [],
})
export class CrudDialogComponent implements OnInit {
  @Input()
  public submitButton: string;

  @Input()
  public cancelButton: string;

  public form: FormGroup;

  @Input()
  public fieldArray: Subject<FieldArray>;

  public fields: Field[];

  @Input()
  public title: string;

  @Output()
  public save = new EventEmitter();

  public getFormControl(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }

  constructor(
    private dialogRef: MatDialogRef<CrudDialogComponent>,
    public fieldHelper: FieldHelperService
  ) {}

  ngOnInit() {
    this.fieldArray.subscribe((fields: FieldArray) => {
      this.initForm(fields);
    });
  }

  private initForm(fields: FieldArray): void {
    const group = {};
    this.fields = fields;

    this.fields.forEach((element) => {
      if (element.elems && element.elems.getFormControl) {
        group[element.param] = element.elems.getFormControl;
      }
    });
    this.form = new FormGroup(group);
  }

  public onClickSave(): void {
    this.save.emit(this.form);
  }

  public onClickCancel(): void {
    this.dialogRef.close();
  }
}
