import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
@Component({
  selector: 'toolbar-basic',
  templateUrl: 'toolbar-basic.component.html',
  styleUrls: ['toolbar-basic.component.scss']
})
export class ToolbarBasicComponent implements OnInit {
  ngOnInit() {}

  seachOnClick(value) {
    console.log(value);
  }
}

export const ToolbarBasicData = {
  name: 'Toolbar'
};
