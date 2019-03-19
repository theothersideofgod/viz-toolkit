import { Component, OnInit } from '@angular/core';
import { importExpr } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'header-basic',
  templateUrl: 'header-basic.component.html',
  styleUrls: ['header-basic.component.scss']
})
export class HeaderBasicComponent implements OnInit {
  checkboxes = [
    { name: 'Application Menu', checked: true },
    { name: 'Notifications', checked: true },
    { name: 'Help/Support', checked: true }
  ];

  userType = '1';

  constructor() {}

  ngOnInit() {}

  setCheckbox(item) {
    item.checked = !item.checked;
  }
}

export const HeaderBasicData = {
  name: 'HeaderBasic'
};
