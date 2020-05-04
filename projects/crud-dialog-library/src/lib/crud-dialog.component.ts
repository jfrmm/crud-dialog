import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';

import { Field } from './field/field';
import { FieldHelperService } from './services/field-helper.service';

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
  public fields: Field[];

  @Input()
  public title: string;

  @Output()
  public save = new EventEmitter();

  public getFormControl(name: string): FormControl {
    return this.form.get(name) as FormControl
  }

  constructor(
    private dialogRef: MatDialogRef<CrudDialogComponent>,
    public fieldHelper: FieldHelperService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    const group = {};
    this.fields.forEach((element) => {
      if (element.elems && element.elems.getFormControl) {
        console.log(1);
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
