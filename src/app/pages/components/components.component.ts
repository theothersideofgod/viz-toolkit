import { Component, OnInit, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  componentClass = [
    [
      {
        title: 'getting started',
        components: [
          {
            title: 'designers',
            desc: 'Introduction to Designers',
            route: 'designers',
            img: 'designers'
          },
          {
            title: 'developers',
            desc: 'Introduction to Developers',
            route: 'developers',
            img: 'developers'
          }
        ]
      },
      {
        title: 'foundation',
        components: [
          {
            title: 'colors',
            desc: 'Color System',
            route: 'colors',
            img: 'colors'
          },
          {
            title: 'typography',
            desc: 'Typography system',
            route: 'typography',
            img: 'typography'
          }
        ]
      }
    ],
    {
      title: 'form controls',
      components: [
        {
          title: 'autocomplete',
          desc: 'A panel of suggested options',
          route: 'autocomplete',
          img: 'autocomplete'
        },
        {
          title: 'checkbox',
          desc: 'All the states of the checkbox',
          route: 'checkbox',
          img: 'checkbox'
        },
        {
          title: 'datepicker',
          desc: 'Pick a date or date range from the calendar',
          route: 'datepicker',
          img: 'datepicker'
        },
        {
          title: 'form field',
          desc: 'All form field states & validation',
          route: 'formfield',
          img: 'form field'
        },
        {
          title: 'radio button',
          desc: 'All states of the radio button',
          route: 'radio',
          img: 'radio button'
        },
        {
          title: 'select',
          desc: 'Dropdown & Selection',
          route: 'select',
          img: 'select'
        },
        {
          title: 'slider',
          desc: 'Selection from a range of values',
          route: 'slider',
          img: 'slider'
        },
        {
          title: 'slide toggle',
          desc: 'An on/off control',
          route: 'slidetoggle',
          img: 'slide toggle'
        }
      ]
    },
    {
      title: 'navigation',
      components: [
        {
          title: 'menu',
          desc: 'Floating panel containing a list of options',
          route: 'menu',
          img: 'menu'
        },
        {
          title: 'sidenav',
          desc: 'Add side content to a fullscreen app',
          route: 'sidenav',
          img: 'sidenav'
        },
        {
          title: 'toolbar',
          desc: 'Container for headers, titles, or actions',
          route: 'toolbar',
          img: 'toolbar'
        },
        {
          title: 'header',
          desc: 'Global header component',
          route: 'header',
          img: 'header'
        },
        {
          title: 'footer',
          desc: 'Global footer component',
          route: 'footer',
          img: 'footer'
        }
      ]
    },
    {
      title: 'layouts',
      components: [
        {
          title: 'card',
          desc: 'A container for different types of content',
          route: 'card',
          img: 'card'
        },
        {
          title: 'expansion panel',
          desc: 'An expandable detail-summary view',
          route: 'expansionpanel',
          img: 'expansion panel'
        },
        {
          title: 'list',
          desc: 'Container that wraps and formats a series of line items',
          route: 'list',
          img: 'list'
        },
        {
          title: 'tabs',
          desc: 'Organize content into separate views',
          route: 'tabs',
          img: 'tabs'
        },
        {
          title: 'tree',
          desc: 'Styled tree that can be used to display hierarchy of data',
          route: 'tree',
          img: 'tree'
        },
        {
          title: 'stepper',
          desc: 'Steppers convey progress through numbered steps.',
          route: 'stepper',
          img: 'stepper'
        },
        {
          title: 'divider',
          desc: 'A line separator with various orientation options.',
          route: 'divider',
          img: 'divider'
        }
      ]
    },
    {
      title: 'buttons & indicators',
      components: [
        {
          title: 'button',
          desc: 'All states and types of buttons',
          route: 'button',
          img: 'button'
        },
        {
          title: 'button toggle',
          desc: 'Toggles with the appearance of a button',
          route: 'buttontoggle',
          img: 'buttontoggle'
        },
        {
          title: 'badge',
          desc: 'Small status descriptors',
          route: 'badge',
          img: 'badge'
        },
        {
          title: 'chips',
          desc: 'A list of values as an individual component',
          route: 'chips',
          img: 'chips'
        },
        {
          title: 'icon',
          desc: 'Icons and recommended usage',
          route: 'icon',
          img: 'icon'
        },
        {
          title: 'progress spinner',
          desc: 'A circular indicator of progress and activity',
          route: 'progressspinner',
          img: 'progress spinner'
        },
        {
          title: 'progress bar',
          desc: 'A horizontal bar for indicating progress and activity',
          route: 'progressbar',
          img: 'progress bar'
        },
        {
          title: 'ripples',
          desc: 'Connect user input to screen reactions',
          route: 'ripples',
          img: 'ripples'
        },
        {
          title: 'feedback indicator',
          desc: 'Messaging for important changes or persistent conditions',
          route: 'feedbackindicator',
          img: 'feedback indicator'
        }
      ]
    },
    {
      title: 'popups & modals',
      components: [
        {
          title: 'dialog',
          desc: 'Modal dialogs',
          route: 'dialog',
          img: 'dialog'
        },
        {
          title: 'snackbar',
          desc: 'Snack-bar notifications',
          route: 'snackbar',
          img: 'snackbar'
        },
        {
          title: 'tooltip',
          desc: 'Text label for displaying short-form information',
          route: 'tooltip',
          img: 'tooltip'
        },
        {
          title: 'bottom sheet',
          desc:
            'Bottom sheets slide up from the bottom of the screen to reveal more content.',
          route: 'bottomsheet',
          img: 'bottom sheet'
        },
        { title: 'login', desc: 'Login Modal', route: 'login', img: 'login' }
      ]
    },
    {
      title: 'data table',
      components: [
        {
          title: 'paginator',
          desc: 'Provides navigation for paged information',
          route: 'paginator',
          img: 'paginator'
        },
        {
          title: 'table',
          desc: 'Styled data-table that can be used to display rows of data',
          route: 'table',
          img: 'table'
        },
        {
          title: 'sort header',
          desc: 'Sorting states of data table header',
          route: 'sort',
          img: 'sort header'
        },
        {
          title: 'no data',
          desc: 'Notification when there is no data',
          route: 'nodata',
          img: 'no data'
        }
      ]
    },
    {
      title: 'global errors',
      components: [
        {
          title: 'HTTP status codes: error states',
          img: 'httpstatus',
          desc: 'An error state is a screen that is shown when things go wrong',
          route: 'httpstatus'
        }
      ]
    },
    // {
    //   title: 'pages',
    //   components: [
    //     { title: 'login', desc: 'Login Modal', route: 'login', img: 'login' }
    //   ]
    // },
    {
      title: 'templates',
      components: [
        {
          title: 'application templates',
          desc: 'Vizient UX framework',
          route: 'applicationtemplates',
          img: 'application templates'
        }
      ]
    },
    { title: '', components: [] }
  ];
  constructor(private router: Router) {}

  ngOnInit() {}

  routeTo(route) {
    this.router.navigate([`/documentation/${route}`]);
  }
  isArray(item) {
    return Array.isArray(item);
  }
}

@NgModule({
  imports: [MatIconModule, CommonModule],
  exports: [ComponentsComponent],
  declarations: [ComponentsComponent]
})
export class ComponentsModule {}
