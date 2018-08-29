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
      title: 'form controls',
      components: [
        {
          title: 'checkbox',
          desc: 'All state of checkbox',
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
          desc: 'All states of radio button',
          route: 'radio'
        },
        {
          title: 'select',
          desc: 'Dropdown & Selection',
          route: 'select'
        },
        {
          title: 'slider',
          desc: 'Selection of a value from a range',
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
          desc: 'Floating panel containing list of options',
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
          title: 'header & footer',
          desc: 'Global header',
          route: 'header'
        },
        {
          title: 'header & footer',
          desc: 'Global footer',
          route: 'footer'
        }
      ]
    },
    {
      title: 'layouts',
      components: [
        {
          title: 'card',
          desc: 'A content container for different types of contents',
          route: 'card'
        },
        {
          title: 'expansion panel',
          desc: 'An expandable details-summary view',
          route: 'expansionpanel'
        },
        {
          title: 'list',
          desc:
            'Conainer compoennt that wraps and formats a series of line items',
          route: 'list'
        },
        {
          title: 'tabs',
          desc: 'Organize content into separate views',
          route: 'tabs'
        },
        {
          title: 'tree',
          desc: 'Styled tree that can be used to display hierachy data',
          route: 'tree'
        }
      ]
    },
    {
      title: 'buttons & indicators',
      components: [
        {
          title: 'button',
          desc: 'All states of button',
          route: 'button'
        },
        {
          title: 'badge',
          desc: 'Small status descriptors',
          route: 'badge'
        },
        {
          title: 'chip',
          desc: 'A list of values as individual',
          route: 'chip'
        },
        {
          title: 'icon',
          desc: 'Icon usage',
          route: 'icon'
        },
        {
          title: 'progress spinner',
          desc: 'A circular indicators of progress and activity',
          route: 'progressspinner'
        },
        {
          title: 'progress bar',
          desc:
            'A horizontal progress-bar for indicating progress and activity',
          route: 'progressbar'
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
          desc: 'Snack-bar notification',
          route: 'snackbar'
        },
        {
          title: 'tooltip',
          desc: 'Provides a text label that is displayed by hover interaction',
          route: 'tooltip'
        },
        {
          title: 'login',
          desc: 'Login modal',
          route: 'login'
        }
      ]
    },
    {
      title: 'data table',
      components: [
        {
          title: 'paginator',
          desc: 'Providers navigation for paged information',
          route: 'paginator'
        },
        {
          title: 'table',
          desc: 'Styled data-table taht can be used to display rows of data',
          route: 'table'
        },
        {
          title: 'no data',
          desc: 'Help the user know when there is no data',
          route: 'nodata'
        },
        {
          title: 'feedback indicator',
          desc: 'Inform user about important changes or persistent conditions',
          route: 'feedbackindicator'
        }
      ]
    },
    {
      title: 'templates',
      components: []
    },
    {
      title: 'pages',
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
