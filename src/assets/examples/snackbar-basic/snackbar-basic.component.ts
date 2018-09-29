import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'snackbar-basic',
  templateUrl: 'snackbar-basic.component.html',
  styleUrls: ['snackbar-basic.component.css']
})
export class SnackbarBasicComponent implements OnInit {
  message = 'Greyhound divisively hello.';
  action = 'Button';
  @ViewChild('snackbarBasic', {read: ViewContainerRef}) snackbarBasic: ViewContainerRef;
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.open(this.message, this.action, {
      panelClass: 'viz-snackbar-desktop',
      duration: 3000,
      viewContainerRef: this.snackbarBasic
    });
  }

  ngOnInit() {}
}

export const SnackbarBasicData = {
  name: 'SnackbarBasic'
};
