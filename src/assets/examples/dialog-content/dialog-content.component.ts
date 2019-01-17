import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'dialog-content-popup',
  templateUrl: './dialog-content-popup.component.html',
  styleUrls: ['./dialog-content-popup.component.scss']
})
export class DialogContentPopupComponent {
  constructor(public dialogRef: MatDialogRef<DialogContentPopupComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog-content.component.html',
  styleUrls: ['dialog-content.component.css']
})
export class DialogContentComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentPopupComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit() {}
}

export const DialogContentData = {
  name: 'DialogContent'
};
