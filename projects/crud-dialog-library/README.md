# CRUD Dialog Library

> **CRUD Dialog Library** is an Angular package developed by ALTER SOLUTIONS PORTUGAL. This library provides a simple way to create simple CRUD, abstracting from all the logic. It has been developed using Angular 9.0.

# Table of Contents

- [Getting started](#getting-started)
- [Usage](#usage)
- [Customize at component level](#customize-at-component-level)
  - [Basic fields](#basic-fields)
  - [FieldArray](#fieldarray)

# Getting started

Run `npm install @asp-devteam/crud-dialog` to install the package in your project.

> Be aware that this package requires some peer dependencies to be installed:
>
> - "@angular/common"
> - "@angular/cdk"
> - "@angular/core"
> - "@angular/material"
> - "@angular/flex-layout"
>   project

# Usage

Next import the `CrudDialogModule` into your application.

```typescript
import { CrudDialogModule } from "@asp-devteam/crud-dialog";

@NgModule({
  declarations: [AppComponent],
  imports: [CrudDialogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

If you intend to use the CRUD library in multiple places accross your app, its recommended that you create a separate NgModule that imports and then exports all of your shared modules.

```typescript
import { CrudDialogModule } from "@asp-devteam/crud-dialog";

@NgModule({
  declarations: [],
  imports: [CrudDialogModule],
  exports: [CrudDialogModule],
})
export class SharedModule {}
```

# Customize at component level

```html
<asp-crud-dialog
  ...
  [submitButton]="'Yes'"
  [cancelButton]="'No'"
></asp-crud-dialog>
```

## Basic fields

<ul>
    <li>Autocomplete Field</li>
    <li>Label</li>
    <li>Input Field</li>
</ul>
To set up a CRUD dialog, start by instanciating the fields you want to use.

```typescript
import {
  LabelField,
  AutoCompleteField,
  InputField,
  FieldArray,
} from "projects/crud-dialog-library/src/public-api";

fields = new FieldArray();

this.fields.push(
  new AutoCompleteField(
    'user',
    'ID',
    this.users,
    null,
    270,
    {
      validators: [Validators.required],
      customErrors: [
        {
          key:'required',
          message: 'Field is required'
        },
      ]
    },
    true
  ),
  new InputField(
    'first_name',
    'First Name',
    null,
    250,
    null,
    true
  )
);
```

Next, insert the `` selector in your template.

```html
<asp-crud-dialog [fields]="fields"></asp-crud-dialog>
```

Can get all the formControl options shown below.

```typescript
this.fields[0].elems.getFormControl.valueChanges.subscribe((selectedValue) => {
  // change values of inputs based on one selected
  this.fields[1].elems.getFormControl.setValue("test");
  // disable field example
  this.fields[1].elems.enableField();
});
```

Declare a save function.

```typescript
public save(form): void {
    this.someService.save(form).subscribe(response => {
      console.log(response);
    });
  }
```

And add it to your template.

```html
<asp-crud-dialog (save)="save($event)"></asp-crud-dialog>
```

Change value buttons by default his 'Submit' and 'Cancel'.

```html
<asp-crud-dialog [submitButton]="'Yes'" [cancelButton]="'No'"></asp-crud-dialog>
```

## FieldArray

The `FieldArray` class not only provides the `Array API` but also some additional helper methods. These are:
-get(name) -> Returns the field which name matches the given name;

Additionaly, to avoid collisions, the field array will throw an error if there are two fields with the same name.

---

Copyright 2020 Alter Solutions Portugal
