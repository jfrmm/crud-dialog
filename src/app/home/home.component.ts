import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Validators } from '@angular/forms';
import {
  FieldArray,
  AutoCompleteField,
  InputField,
  LabelField,
} from 'projects/crud-dialog-library/src/public-api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public readonly title = 'Test Form';

  private users = [
    {
      id: 1,
      value: 'Pedro',
      first_name: 'Pedro',
      last_name: 'Lima',
      email: 'plima@alter-solutions.com',
    },
    {
      id: 2,
      value: 'Miguel',
      first_name: 'Miguel',
      last_name: 'Lima',
      email: 'plima@alter-solutions.com',
    },
    {
      id: 3,
      value: 'Martins',
      first_name: 'Martins',
      last_name: 'Lima',
      email: 'plima@alter-solutions.com',
    },
    {
      id: 4,
      value: 'Lima',
      first_name: 'Lima',
      last_name: 'Lima',
      email: 'plima@alter-solutions.com',
    },
  ];
  public fields = new FieldArray();
  constructor(private dialogRef: MatDialogRef<HomeComponent>) {}

  ngOnInit() {
    this.initFields();
  }

  initFields() {
    const autoCompleteUser = new AutoCompleteField(
      'user',
      'PSA ID',
      this.users,
      null,
      270,
      [Validators.required],
      true
    );
    const labelForm = new LabelField('Relevant User Information HERE', 230);
    const inputFirstName = new InputField(
      'first_name',
      'First Name',
      null,
      250,
      true
    );
    const inputLastName = new InputField(
      'last_name',
      'Last Name',
      null,
      250,
      true
    );
    const inputEmail = new InputField('email', 'Email', null, 524, true);

    // push fields to the form
    this.fields.push(
      autoCompleteUser,
      labelForm,
      inputFirstName,
      inputLastName,
      inputEmail
    );

    autoCompleteUser.elems.getFormControl.valueChanges.subscribe(
      (selectedValue) => {
        // change values of inputs based on one selected
        inputFirstName.elems.getFormControl.setValue(selectedValue.first_name);
        inputLastName.elems.getFormControl.setValue(selectedValue.last_name);
        inputEmail.elems.getFormControl.setValue(selectedValue.email);
        // disable field example
        inputEmail.elems.enableField();
      }
    );
  }

  public save(form): void {
    const noError = Math.random() >= 0.5;
    if (noError) {
      console.log(form);
      this.dialogRef.close();
    } else {
      console.error('ERROR!');
    }
  }
}
