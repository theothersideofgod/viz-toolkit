import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';

const sketch_link = {
  checkbox: ['Insert / Toolkit Material Library / Components / Checkbox / Off or On & Indeterminate'],
  datepicker: [
    'Insert / Toolkit Material Library / Components / Daterange Picker / Default or Selected 1 or Selected 2',
    'Insert / Toolkit Material Library / Components / Datepicker / Year or Month or Date'
  ],
  formfield: [
    'Insert / Toolkit Material Library / Components / Form / Default or Active & Error'
  ],
  radio: [
    'Insert / Toolkit Material Library / Components / Radio Button'
  ],
  select: [
    'Insert / Toolkit Material Library / Components / Dropdown / Default or Active'
  ],
  slider: [
    'copy from Toolkit Material Library.sketch / Toolkit Components / Form Controls: Slider'
  ],
  slidetoggle: [
    'Insert / Toolkit Material Library / Components / Slide Toggle'
  ],
  menu: ['Insert / Toolkit Material Library / Components / Menu'],
  sidenav: [
    'copy from Toolkit Material Library.sketch / Toolkit Components / Navigation: Sidenav'
  ],
  toolbar: ['-'],
  header: [
    'Insert / Toolkit Material Library / Components / Header / Desktop or Desktop App Switcher or Mobile or Mobile App Switcher'
  ],
  footer: [
    'Insert / Toolkit Material Library / Components / Footer / Deskop or Mobile'
  ],
  card: [
    'copy from Toolkit Material Library.sketch / Toolkit Components / Layouts: Cards'
  ],
  expansionpanel: [
    'copy from Toolkit Material Library.sketch / Toolkit Components / Layouts: Expansion Panel'
  ],
  list: [
    'Insert / Toolkit Material Library / Components / List Group / Icon Before or Icon After'
  ],
  tabs: [
    'Insert / Toolkit Material Library / Components / Tab / Bottom Indicator',
    'Insert / Toolkit Material Library / Components / Tab / Top Indicator'
  ],
  tree: [
    'copy from Toolkit Material Library.sketch / Toolkit Components / Layouts: Tree'
  ],
  stepper: [
    'copy from Toolkit Material Library.sketch / Toolkit Components / Layouts: Stepper'
  ],
  button: [
    'Insert / Toolkit Material Library / Components / Button / Default',
    'Insert / Toolkit Material Library / Components / Button / Left Icon or Right Icon',
    'Insert / Toolkit Material Library / Components / Button / FAB',
  ],
  badge: [
    'Insert / Toolkit Material Library / Components / Badge'
  ],
  chip: [
    'Insert / Toolkit Material Library / Components / Chip / Choice',
    'Insert / Toolkit Material Library / Components / Chip / Input'
  ],
  icon: [
    'Insert / Toolkit Material Library / ✱ / Icon / (Select desired icon)'
  ],
  progressspinner: [
    'Insert / Toolkit Material Library / Components / Progress / Circular'
  ],
  progressbar: [
    'Insert / Toolkit Material Library / Components / Progress / Liner'
  ],
  feedbackindicator: [
    'Insert / Toolkit Material Library / Components / Feedback Indicator'
  ],
  dialog: [
    'copy from Toolkit Material Library.sketch / Toolkit Components / Popups & Modals: Modal'
  ],
  snackbar: ['Insert / Toolkit Material Library / Components / Snackbar'],
  tooltip: ['Insert / Toolkit Material Library / Components / Tooltip'],
  bottomsheet: [
    'Insert / Toolkit Material Library / Components / Bottom Sheet'
  ],
  paginator: [
    'Insert / Toolkit Material Library / Components / Pagination / Default',
    'Insert / Toolkit Material Library / Components / Pagination / Customized'
  ],
  table: [
    'copy from Toolkit Material Library.sketch / Toolkit Components / Data Table: Table'
  ],
  nodata: ['Insert / Toolkit Material Library / Components / No Data'],
  login: [
    'copy from Toolkit Material Library.sketch / Toolkit Components / Popups & Modals: Login'
  ],
  applicationtemplates: [
    'Toolkit Material Library.sketch / Templates / Template: Blank',
    'Toolkit Material Library.sketch / Templates / Template: Dashboard',
    'Toolkit Material Library.sketch / Templates / Template: Form'
  ],
  httpstatus: [
    'copy from Toolkit Material Library.sketch / Toolkit Components / Data Table: Error States'
  ],
  iconography: [
    'Insert / Toolkit Material Library / ✱ / Icon / (Select desired icon)'
  ],
  divider: [
    'Insert / Toolkit Material Library / ✱ / Divider'
  ],
  buttontoggle: [
    'Insert / Toolkit Material Library / Components / Button Toggle / 3 Toggles / Icon or Text',
    'Insert / Toolkit Material Library / Components / Button Toggle / 2 Toggles or 3 Toggles / Icon or Text'
  ],
  sort: [
    'Copy from Toolkit Material Library.sketch / Toolkit Components / Data Table: Table'
  ],
  ripple: [
    'Insert / Toolkit Material Library / ✱ / Ripple'
  ],
  autocomplete: ['copy from Toolkit Material Library.sketch / Toolkit Components / Form Controls: Form Field, Input, Select, Autocomplete / Autocomplete']
};

@Component({
  selector: 'sketch-link',
  templateUrl: './sketch-link.html',
  styleUrls: ['./sketch-link.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SketchLink implements OnInit {
  @Input()
  example;
  sketch_links: string[][] = [[]];
  constructor(private router: Router) {
    // console.log(this.router.url)
  }

  ngOnInit() {
    const componentName = this.router.url.split('/')[2];
    const splashTester = new RegExp('/', 'g');
    const orTester = new RegExp('or', 'g');
    // this.sketch_links = sketch_link[componentName] && sketch_link[componentName][this.example].map(l => {
    //   let newl = l;
    //   newl = newl.replace(
    //     splashTester,
    //     `<span class="sketch-link-splash">/</span>`
    //   );
    //   newl = newl.replace(
    //     orTester,
    //     `<span class="sketch-link-splash">or</span>`
    //   );
    //   return newl;
    // });

    this.example = this.example === '' ? 0 : this.example;

    if (sketch_link[componentName]) {
      let newl = sketch_link[componentName][this.example];
      // console.log(newl);
      newl = newl.replace(
        splashTester,
        `<span class="sketch-link-splash">/</span>`
      );
      // newl = newl.replace(
      //   orTester,
      //   `<span class="sketch-link-splash">or</span>`
      // );
      this.sketch_links = newl;
    }
  }
}
