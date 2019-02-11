import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'dialog-complex-popup',
  templateUrl: './dialog-complex-popup.component.html',
  styleUrls: ['./dialog-complex-popup.component.scss']
})
export class DialogComplexPopupComponent {
  constructor(public dialogRef: MatDialogRef<DialogComplexPopupComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'dialog-complex',
  templateUrl: 'dialog-complex.component.html',
  styleUrls: ['dialog-complex.component.css']
})
export class DialogComplexComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(DialogComplexPopupComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit() {}
}

export const DialogComplexData = {
  name: 'DialogComplex'
};
