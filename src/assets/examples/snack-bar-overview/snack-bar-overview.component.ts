import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';

/**
 * @title Basic snack-bar
 */
@Component({
  selector: 'snack-bar-overview',
  templateUrl: 'snack-bar-overview.component.html',
  styleUrls: ['snack-bar-overview.component.css'],
})
export class SnackBarOverviewComponent {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
