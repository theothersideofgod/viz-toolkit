import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'dialog-confirmation-popup',
  templateUrl: './dialog-confirmation-popup.component.html',
  styleUrls: ['./dialog-confirmation-popup.component.scss']
})
export class DialogConfirmationPopupComponent {
  constructor(public dialogRef: MatDialogRef<DialogConfirmationPopupComponent>) {}
  checked: false;
  
  closeDialog(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'dialog-confirmation',
  templateUrl: 'dialog-confirmation.component.html',
  styleUrls: ['dialog-confirmation.component.css']
})
export class DialogConfirmationComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(DialogConfirmationPopupComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit() {}
}

export const DialogConfirmationData = {
  name: 'DialogConfirmation'
};
