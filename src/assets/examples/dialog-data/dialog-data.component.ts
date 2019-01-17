import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'dialog-data-popup',
  templateUrl: './dialog-data-popup.component.html',
  styleUrls: ['./dialog-data-popup.component.scss']
})
export class DialogDataPopupComponent {
  constructor(public dialogRef: MatDialogRef<DialogDataPopupComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'dialog-data',
  templateUrl: 'dialog-data.component.html',
  styleUrls: ['dialog-data.component.css']
})
export class DialogDataComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(DialogDataPopupComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit() {}
}

export const DialogDataData = {
  name: 'DialogData'
};
