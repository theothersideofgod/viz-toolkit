import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'snackbar-basic',
  templateUrl: 'snackbar-basic.component.html',
  styleUrls: ['snackbar-basic.component.css']
})
export class SnackbarBasicComponent implements OnInit {
  message: string = 'Greyhound divisively hello.';
  action: string = 'button';
  @ViewChild('snackbarBasic',{read: ViewContainerRef}) snackbarBasic: ViewContainerRef
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(this.message, this.action, {
      panelClass: 'vizient-snackbar',
      duration: 30000,
      viewContainerRef: this.snackbarBasic
    });
  }

  ngOnInit() {}
}

export const SnackbarBasicData = {
  name: 'SnackbarBasic'
};
