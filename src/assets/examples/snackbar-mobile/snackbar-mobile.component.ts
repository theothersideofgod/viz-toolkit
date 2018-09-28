import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'snackbar-mobile',
  templateUrl: 'snackbar-mobile.component.html',
  styleUrls: ['snackbar-mobile.component.css']
})
export class SnackbarMobileComponent implements OnInit {
  message =
    'Greyhound divisively hello coldly wonderfully marginally far upon excluing.';
  action = 'Button';
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.open(this.message, this.action, {
      panelClass: 'viz-snackbar-mobile',
      duration: 3000
    });
  }

  ngOnInit() {}
}

export const SnackbarMobileData = {
  name: 'SnackbarMobile'
};
