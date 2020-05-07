import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';

import { Field } from './field/field';
import { FieldHelperService } from './services/field-helper.service';
import { FieldArray } from './field/field-array';

@Component({
  selector: 'asp-crud-dialog',
  templateUrl: './crud-dialog.component.html',
  styleUrls: ['./crud-dialog.component.css'],
})
export class CrudDialogComponent implements OnInit, OnDestroy {
  @Input()
  public fieldArray: Subject<FieldArray>;

  @Input()
  public title: string;

  @Input()
  public cancelButton: string;

  @Input()
  public submitButton: string;

  @Output()
  public submit = new EventEmitter();

  public fields: Field[];

  public form: FormGroup;

  private subscriptions: Subscription = new Subscription();

  public getFormControl(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }

  constructor(
    private dialogRef: MatDialogRef<CrudDialogComponent>,
    public fieldHelper: FieldHelperService
  ) {}

  ngOnInit() {
    this.subscriptions.add(
      this.fieldArray.subscribe((fields: FieldArray) => {
        this.initForm(fields);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
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
    this.submit.emit(this.form);
  }

  public onClickCancel(): void {
    this.dialogRef.close();
  }
}
