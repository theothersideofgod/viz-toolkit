import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { DOCUMENT } from '@angular/common';

const initNavList = [
  {
    name: 'Getting Started',
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
      },
      {
        name: 'Iconography',
        value: 'iconography'
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
      },
      {
        name: 'Divider',
        value: 'divider'
      }
    ]
  },
  {
    name: 'Buttons & Indicators',
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
  },
  {
    name: 'Global Errors',
    subs: [
      {
        name: 'HTTP Status Codes',
        value: 'httpstatus'
      }
    ]
  },
  {
    name: 'Pages',
    subs: [
      {
        name: 'Login',
        value: 'login'
      }
    ]
  },
  {
    name: 'Templates',
    subs: [
      {
        name: 'Application Templates',
        value: 'applicationtemplates'
      }
    ]
  }
];
@Component({
  selector: 'app-component-sidenav',
  templateUrl: './component-sidenav.html',
  styleUrls: ['./component-sidenav.scss']
})
export class ComponentSidenavComponent implements OnInit {
  navList = initNavList;
  scrollContainer: any;
  documentContent: any;
  isScrollBottom = false;
  constructor(
    private _router: Router,
    @Inject(DOCUMENT) private document: any
  ) {
    // console.log(_router.url);
  }

  ngOnInit() {
    this.scrollContainer = this.document.querySelector('.main-sec');
    this.documentContent = this.document.querySelector('.documentation-main');
    fromEvent(this.scrollContainer, 'scroll').subscribe(() => {
      if (
        this.scrollContainer.scrollTop >=
        this.documentContent.offsetHeight - this.scrollContainer.offsetHeight - 100
      ) {
        this.isScrollBottom = true;
      } else {
        this.isScrollBottom = false;
      }
    });
  }
}
