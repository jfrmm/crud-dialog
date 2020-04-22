import { NgModule } from '@angular/core';
import { AspFormLibraryComponent } from './asp-form-library.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [AspFormLibraryComponent],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [AspFormLibraryComponent],
})
export class AspFormLibraryModule { }
