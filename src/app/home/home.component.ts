import { Component, OnInit } from '@angular/core';
import { InputField } from 'asp-form-library';
import { LabelField, AutoCompleteFilter } from 'projects/asp-form-library/src/public-api';
import { of } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public readonly title = 'Test Form';
  private users = [
    {
      id: 1,
      value: 'Pedro',
      first_name: 'Pedro',
      last_name: 'Lima',
      email: 'plima@alter-solutions.com'
    },
    {
      id: 2,
      value: 'Miguel',
      first_name: 'Miguel',
      last_name: 'Lima',
      email: 'plima@alter-solutions.com'
    },
    {
      id: 3,
      value: 'Martins',
      first_name: 'Martins',
      last_name: 'Lima',
      email: 'plima@alter-solutions.com'
    },
    {
      id: 4,
      value: 'Lima',
      first_name: 'Lima',
      last_name: 'Lima',
      email: 'plima@alter-solutions.com'
    },
  ];
  public fields: any[];
  constructor(
    private dialogRef: MatDialogRef<HomeComponent>
    ) { }

  ngOnInit() {
    this.initFields();
  }

  initFields() {
    const autoCompleteUser = new AutoCompleteFilter('user', 'PSA ID', this.users, null, 270, [Validators.required], true);
    const labelForm = new LabelField('Relevant User Information HERE', 230);
    const inputFirstName = new InputField('first_name', 'First Name', null, 250, true);
    const inputLastName = new InputField('last_name', 'Last Name', null, 250, true);
    const inputEmail = new InputField('email', 'Email', null, 524, true);

    this.fields = [
      autoCompleteUser,
      labelForm,
      inputFirstName,
      inputLastName,
      inputEmail
    ];

    autoCompleteUser.elements.formControl.valueChanges.subscribe((selectedValue) => {
      inputFirstName.elements.formControl.setValue(selectedValue.first_name);
      inputLastName.elements.formControl.setValue(selectedValue.last_name);
      inputEmail.elements.formControl.setValue(selectedValue.email);
    });
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
