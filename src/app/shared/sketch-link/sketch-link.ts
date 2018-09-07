import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

let sketch_link = {
  checkbox: 'Insert / Toolkit Material Library / Components / Checkbox',
  datepicker:
    'Insert / Toolkit Material Library / Components / Daterange Picker / Default or Selected 1 or Selected 2 /n Insert / Toolkit Material Library / Components / Datepicker / Year or Month or Date',
  formfield:
    'Insert / Toolkit Material Library / Components / Form / Default or Active & Error',
  radio:
    'Insert / Toolkit Material Library / Components / Radio Button / On or Off',
  select:
    'Insert / Toolkit Material Library / Components / Dropdown / Default or Active',
  slider:
    'copy from Toolkit Material Library.sketch / Toolkit Components / Form Controls: Slider',
  slidetoggle:
    'Insert / Toolkit Material Library / Components / Slide Toggle / On or Off or Range',
  menu: 'Insert / Toolkit Material Library / Components / Dropdown Selection',
  sidenav:
    'copy from Toolkit Material Library.sketch / Toolkit Components / Navigation: Sidenav',
  toolbar: '-',
  header:
    'Insert / Toolkit Material Library / Components / Header / Desktop or Desktop App Switcher or Mobile or Mobile App Switcher',
  footer:
    'Insert / Toolkit Material Library / Components / Footer / Deskop or Mobile',
  card:
    'copy from Toolkit Material Library.sketch / Toolkit Components / Layouts: Cards',
  expansionpanel:
    'copy from Toolkit Material Library.sketch / Toolkit Components / Layouts: Expansion Panel',
  list:
    'Insert / Toolkit Material Library / Components / List Group / Icon Before or Icon After',
  tabs:
    'Insert / Toolkit Material Library / Components / Tab / One Line or Two Lines or One Line with Top Indicator',
  tree:
    'copy from Toolkit Material Library.sketch / Toolkit Components / Layouts: Tree',
  stepper:
    'copy from Toolkit Material Library.sketch / Toolkit Components / Layouts: Stepper',
  button:
    'Insert / Toolkit Material Library / Components / Button / Default Button or Button with Left Icon or Button with Right Icon',
  badge:
    'Insert / Toolkit Material Library / Components / Badge / Short or Long',
  chip:
    'Insert / Toolkit Material Library / Components / Chip / Input or Choice',
  icon: 'Insert / Toolkit Material Library / ✱ / Icon / (Select desired icon)',
  progressspinner:
    'Insert / Toolkit Material Library / Components / Progress / Circular',
  progressbar:
    'Insert / Toolkit Material Library / Components / Progress / Liner',
  feedbackindicator:
    'Insert / Toolkit Material Library / Components / Feedback Indicator',
  dialog:
    'copy from Toolkit Material Library.sketch / Toolkit Components / Popups & Modals: Modal',
  snackbar: 'Insert / Toolkit Material Library / Components / Snackbar',
  tooltip: 'Insert / Toolkit Material Library / Components / Tooltip',
  bottomsheet: 'Insert / Toolkit Material Library / Components / Bottom Sheet',
  paginator: 'Insert / Toolkit Material Library / Components / Pagination',
  table:
    'copy from Toolkit Material Library.sketch / Toolkit Components / Data Table: Table',
  nodata: 'Insert / Toolkit Material Library / Components / No Data',
  login: 'Insert / Toolkit Material Library / Components / Checkbox'
};

@Component({
  selector: 'sketch-link',
  templateUrl: './sketch-link.html',
  styleUrls: ['./sketch-link.scss']
})
export class SketchLink implements OnInit {
  sketch_link: string;
  constructor(private router: Router) {
    // console.log(this.router.url)
  }

  ngOnInit() {
    this.sketch_link = sketch_link[this.router.url.split('/')[2]].split('/')
  }
}
