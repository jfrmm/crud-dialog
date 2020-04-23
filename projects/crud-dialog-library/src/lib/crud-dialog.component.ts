import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Field } from "./field/field";
import { MatDialogRef } from "@angular/material/dialog";
import { FieldHelperService } from "./services/field-helper.service";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "asp-crud-dialog",
  templateUrl: "./crud-dialog.component.html",
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
