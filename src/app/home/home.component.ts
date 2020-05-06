import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Validators } from '@angular/forms';
import {
  FieldArray,
  AutoCompleteField,
  InputField,
  LabelField,
  TextArea,
} from 'projects/crud-dialog-library/src/public-api';
import { tap, delay } from 'rxjs/operators';
import { Observable, forkJoin, Subject } from 'rxjs';

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

  public fieldArray = new FieldArray();

  fields = new Subject<FieldArray>();

  constructor(private dialogRef: MatDialogRef<HomeComponent>) {}

  ngOnInit() {
    this.initObservables().subscribe(() => this.initFields());
  }

  private initObservables(): Observable<any> {
    const stuff = [{ id: 1, value: 'stuff' }];

    return forkJoin([stuff]).pipe(
      delay(3000),
      tap((results) => {
        console.log('forkjoin');
      })
    );
  }

  initFields() {
    const autoCompleteUser = new AutoCompleteField(
      'user',
      'ID',
      this.users,
      null,
      270,
      {
        validators: [Validators.required],
      },
      true
    );
    const labelForm = new LabelField(
      'Relevant User Information <b>HERE</b> ',
      230
    );
    const inputFirstName = new InputField(
      'first_name',
      'First Name',
      null,
      250,
      null,
      true
    );
    const inputLastName = new InputField(
      'last_name',
      'Last Name',
      null,
      250,
      null,
      true
    );
    const inputEmail = new InputField(
      'email',
      'Email',
      null,
      524,
      {
        validators: [Validators.required, Validators.email],
      },
      null,
      true
    );
    const textArea = new TextArea(
      'textArea',
      'Place your comment here...',
      null,
      524,
      null
    );

    // push fields to the form
    this.fieldArray.push(
      autoCompleteUser,
      labelForm,
      inputFirstName,
      inputLastName,
      inputEmail,
      textArea
    );
    this.fields.next(this.fieldArray);

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
