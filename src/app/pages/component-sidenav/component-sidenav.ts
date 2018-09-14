import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-sidenav',
  templateUrl: './component-sidenav.html',
  styleUrls: ['./component-sidenav.scss']
})
export class ComponentSidenavComponent implements OnInit {
  navList = initNavList;

  constructor(private _router: Router) {
    console.log(_router.url);
  }

  ngOnInit() {}
}

const initNavList = [
  {
    name: 'Getting started',
    subs: [
      {
        name: 'Designers',
        value: 'designers'
      },
      {
        name: 'Developers',
        value: 'developers'
      }
    ]
  },
  {
    name: 'Foundation',
    subs: [
      {
        name: 'Colors',
        value: 'colors'
      },
      {
        name: 'Typography',
        value: 'typography'
      }
    ]
  },
  {
    name: 'Form Controls',
    subs: [
      {
        name: 'Checkbox',
        value: 'checkbox'
      },
      {
        name: 'Datepicker',
        value: 'datepicker'
      },
      {
        name: 'Form Field',
        value: 'formfield'
      },
      {
        name: 'Radio Buttons',
        value: 'radio'
      },
      {
        name: 'Select',
        value: 'select'
      },
      {
        name: 'Slider',
        value: 'slider'
      },
      {
        name: 'Slide Toggle',
        value: 'slidetoggle'
      }
    ]
  },
  {
    name: 'Navigation',
    subs: [
      {
        name: 'Menu',
        value: 'menu'
      },
      {
        name: 'Sidenav',
        value: 'sidenav'
      },
      {
        name: 'Toolbar',
        value: 'toolbar'
      },
      // {
      //   name: 'Header & Footer',
      //   value: 'headerfooter'
      // },
      {
        name: 'Header',
        value: 'header'
      },
      {
        name: 'Footer',
        value: 'footer'
      }
    ]
  },
  {
    name: 'Layout',
    subs: [
      {
        name: 'Card',
        value: 'card'
      },
      {
        name: 'Expansion Panel',
        value: 'expansionpanel'
      },
      {
        name: 'List',
        value: 'list'
      },
      {
        name: 'Tabs',
        value: 'tabs'
      },
      {
        name: 'Tree',
        value: 'tree'
      },
      {
        name: 'Stepper',
        value: 'stepper'
      }
    ]
  },
  {
    name: 'Button & Indicatiors',
    subs: [
      {
        name: 'Button',
        value: 'button'
      },
      {
        name: 'Badge',
        value: 'badge'
      },
      {
        name: 'Chip',
        value: 'chip'
      },
      {
        name: 'Icon',
        value: 'icon'
      },
      {
        name: 'Progress Spinner',
        value: 'progressspinner'
      },
      {
        name: 'Progress Bar',
        value: 'progressbar'
      },
      {
        name: 'Feedback Indicator',
        value: 'feedbackindicator'
      }
    ]
  },
  {
    name: 'Popups & Modals',
    subs: [
      {
        name: 'Dialog',
        value: 'dialog'
      },
      {
        name: 'Snackbar',
        value: 'snackbar'
      },
      {
        name: 'Tooltip',
        value: 'tooltip'
      },
      {
        name: 'Bottom Sheet',
        value: 'bottomsheet'
      },
      {
        name: 'Login',
        value: 'login'
      }
    ]
  },
  {
    name: 'Data Table',
    subs: [
      {
        name: 'Paginator',
        value: 'paginator'
      },
      {
        name: 'Table',
        value: 'table'
      },
      {
        name: 'No Data',
        value: 'nodata'
      }
    ]
  }
  // {
  //   name: 'Pages',
  //   subs: [
  //     {
  //       name: 'Login',
  //       value: 'login'
  //     }
  //   ]
  // }
];
