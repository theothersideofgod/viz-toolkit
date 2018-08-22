import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'bottomsheet-basic',
  templateUrl: 'bottomsheet-basic.component.html',
  styleUrls: ['bottomsheet-basic.component.css']
})
export class BottomsheetBasicComponent implements OnInit {
  @ViewChild('tpl')
  tpl: TemplateRef<any>;
  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.bottomSheet.open(this.tpl);
  }

  openLink(): void {
    this.bottomSheet.dismiss()
  }

  ngOnInit() {}
}

export const BottomsheetBasicData = {
  name: 'BottomsheetBasic'
};
