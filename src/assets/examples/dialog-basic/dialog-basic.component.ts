import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'dialog-basic',
  templateUrl: 'dialog-basic.component.html',
  styleUrls: ['dialog-basic.component.css']
})
export class DialogBasicComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda'
      }
    });
  };

  ngOnInit() {}
}

@Component({
  selector: 'dialog-data-example-dialog',
  template: `
    <div>I am the dialog</div>
  `
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}

export const DialogBasicData = {
  name: 'DialogBasic'
};
