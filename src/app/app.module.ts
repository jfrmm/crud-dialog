import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AspFormLibraryModule } from 'projects/asp-form-library/src/public-api';
import {
  MatInputModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatIconModule,
  MatCheckboxModule,
  MatButtonModule,
  MatDialogModule,
  MatDialogRef
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AspFormLibraryModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule,
    FlexLayoutModule
  ],
  exports: [
    AspFormLibraryModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule,
    FlexLayoutModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }, ],
  bootstrap: [AppComponent],
  entryComponents: [HomeComponent]
})
export class AppModule { }
