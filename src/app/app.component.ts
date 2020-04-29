import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'asp-form';

  constructor(private dialog: MatDialog) {}

  public onClickOpenDialog(): void {
    this.dialog.open(HomeComponent, {
      width: '600px',
      // panelClass: 'form-dialog-sm',
      disableClose: true,
    });
  }
}
