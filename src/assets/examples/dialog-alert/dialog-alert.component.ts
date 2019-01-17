import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'dialog-contain',
  templateUrl: './dialog-contain.component.html',
  styleUrls: ['./dialog-contain.component.scss']
})
export class DialogAlertPopupComponent {
  constructor(public dialogRef: MatDialogRef<DialogAlertPopupComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'dialog-alert',
  templateUrl: 'dialog-alert.component.html',
  styleUrls: ['dialog-alert.component.css']
})
export class DialogAlertComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}
  openDialog() {
    const dialogRef = this.dialog.open(DialogAlertPopupComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

export const DialogAlertData = {
  name: 'DialogAlert'
};
