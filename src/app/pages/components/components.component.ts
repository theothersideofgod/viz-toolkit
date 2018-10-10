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
    {
      title: 'getting started',
      components: [
        {
          title: 'designers',
          desc: 'Introduction to Designers',
          route: 'designers'
        },
        {
          title: 'developers',
          desc: 'Introduction to Developers',
          route: 'designers'
        }
      ]
    },
    {
      title: 'foundation',
      components: [
        {
          title: 'colors',
          desc: 'Color System',
          route: 'colors'
        },
        {
          title: 'typography',
          desc: 'Typography system',
          route: 'typography'
        }
      ]
    },
    {
      title: '',
      components: []
    },
    {
      title: 'form controls',
      components: [
        {
          title: 'checkbox',
          desc: 'All the states of the checkbox',
          route: 'checkbox'
        },
        {
          title: 'datepicker',
          desc: 'Pick a date or date range from the calendar',
          route: 'datepicker'
        },
        {
          title: 'form field',
          desc: 'All form field states & validation',
          route: 'formfield'
        },
        {
          title: 'radio button',
          desc: 'All states of the radio button',
          route: 'radio'
        },
        {
          title: 'select',
          desc: 'Dropdown & Selection',
          route: 'select'
        },
        {
          title: 'slider',
          desc: 'Selection from a range of values',
          route: 'slider'
        },
        {
          title: 'slide toggle',
          desc: 'An on/off control',
          route: 'slidetoggle'
        }
      ]
    },
    {
      title: 'navigation',
      components: [
        {
          title: 'menu',
          desc: 'Floating panel containing a list of options',
          route: 'menu'
        },
        {
          title: 'sidenav',
          desc: 'Add side content to a fullscreen app',
          route: 'sidenav'
        },
        {
          title: 'toolbar',
          desc: 'Container for headers, titles, or actions',
          route: 'toolbar'
        },
        {
          title: 'header',
          desc: 'Global header component',
          route: 'header'
        },
        {
          title: 'footer',
          desc: 'Global footer component',
          route: 'footer'
        }
      ]
    },
    {
      title: 'layouts',
      components: [
        {
          title: 'card',
          desc: 'A container for different types of content',
          route: 'card'
        },
        {
          title: 'expansion panel',
          desc: 'An expandable detail-summary view',
          route: 'expansionpanel'
        },
        {
          title: 'list',
          desc: 'Container that wraps and formats a series of line items',
          route: 'list'
        },
        {
          title: 'tabs',
          desc: 'Organize content into separate views',
          route: 'tabs'
        },
        {
          title: 'tree',
          desc: 'Styled tree that can be used to display hierarchy of data',
          route: 'tree'
        },
        {
          title: 'stepper',
          desc: 'Steppers convey progress through numbered steps.',
          route: 'stepper'
        }
      ]
    },
    {
      title: 'buttons & indicators',
      components: [
        {
          title: 'button',
          desc: 'All states and types of buttons',
          route: 'button'
        },
        {
          title: 'badge',
          desc: 'Small status descriptors',
          route: 'badge'
        },
        {
          title: 'chip',
          desc: 'A list of values as an individual component',
          route: 'chip'
        },
        {
          title: 'icon',
          desc: 'Icons and recommended usage',
          route: 'icon'
        },
        {
          title: 'progress spinner',
          desc: 'A circular indicator of progress and activity',
          route: 'progressspinner'
        },
        {
          title: 'progress bar',
          desc: 'A horizontal bar for indicating progress and activity',
          route: 'progressbar'
        },
        {
          title: 'feedback indicator',
          desc: 'Messaging for important changes or persistent conditions',
          route: 'feedbackindicator'
        }
      ]
    },
    {
      title: 'popups & modals',
      components: [
        {
          title: 'dialog',
          desc: 'Modal dialogs',
          route: 'dialog'
        },
        {
          title: 'snackbar',
          desc: 'Snack-bar notifications',
          route: 'snackbar'
        },
        {
          title: 'tooltip',
          desc: 'Text label for displaying short-form information',
          route: 'tooltip'
        },
        {
          title: 'bottom sheet',
          desc: 'Bottom sheets slide up from the bottom of the screen to reveal more content.',
          route: 'bottomsheet'
        }
      ]
    },
    {
      title: 'data table',
      components: [
        {
          title: 'paginator',
          desc: 'Provides navigation for paged information',
          route: 'paginator'
        },
        {
          title: 'table',
          desc: 'Styled data-table that can be used to display rows of data',
          route: 'table'
        },
        {
          title: 'no data',
          desc: 'Notification when there is no data',
          route: 'nodata'
        }
      ]
    },
    {
      title: 'pages',
      components: [
        {
          title: 'login',
          desc: 'Login Modal',
          route: 'login'
        }
      ]
    },
    {
      title: 'templates',
      components: [
        {
          title: 'application templates',
          desc: 'Vizient UX framework',
          route: 'applicationtemplates'
        }
      ]
    },
    {
      title: '',
      components: []
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  routeTo(route) {
    this.router.navigate([`/documentation/${route}`]);
  }
}

@NgModule({
  imports: [MatIconModule, CommonModule],
  exports: [ComponentsComponent],
  declarations: [ComponentsComponent]
})
export class ComponentsModule {}
