import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'snackbar-mobile',
  templateUrl: 'snackbar-mobile.component.html',
  styleUrls: ['snackbar-mobile.component.css'],
})

export class SnackbarMobileComponent implements OnInit {
  message: string =
    'Greyhound divisively hello coldly wonderfully marginally far upon excluing.';
  action: string = 'button';
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(this.message, this.action, {
      panelClass: 'viz-snackbar-mobile',
      duration: 300000
    });
  }

  ngOnInit() {}
}

export const SnackbarMobileData = {
	name: 'SnackbarMobile'
}