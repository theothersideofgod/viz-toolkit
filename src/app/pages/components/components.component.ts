import { Component, OnInit, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';

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
          desc: 'All state of checkbox'
        },
        {
          title: 'datepicker',
          desc: 'Pick a date or date range from the calendar'
        },
        {
          title: 'form field',
          desc: 'All form field states & validation'
        },
        {
          title: 'radio button',
          desc: 'All states of radio button'
        },
        {
          title: 'select',
          desc: 'Dropdown & Selection'
        },
        {
          title: 'slider',
          desc: 'Selection of a value from a range'
        },
        {
          title: 'slide toggle',
          desc: 'An on/off control'
        }
      ]
    },
    {
      title: 'navigation',
      components: [
        {
          title: 'menu',
          desc: 'Floating panel containing list of options'
        },
        {
          title: 'sidenav',
          desc: 'Add side content to a fullscreen app'
        },
        {
          title: 'toolbar',
          desc: 'Container for headers, titles, or actions'
        },
        {
          title: 'header & footer',
          desc: 'Global header & footer'
        }
      ]
    },
    {
      title: 'layouts',
      components: [
        {
          title: 'card',
          desc: 'A content container for different types of contents'
        },
        {
          title: 'expansion panel',
          desc: 'An expandable details-summary view'
        },
        {
          title: 'list',
          desc:
            'Conainer compoennt that wraps and formats a series of line items'
        },
        {
          title: 'tabs',
          desc: 'Organize content into separate views'
        },
        {
          title: 'tree',
          desc: 'Styled tree that can be used to display hierachy data'
        }
      ]
    },
    {
      title: 'Buttons & Indicators',
      components: [
        {
          title: 'Button',
          desc: 'All states of button'
        },
        {
          title: 'Badge',
          desc: 'Small status descriptors'
        },
        {
          title: 'Chip',
          desc: 'A list of values as individual'
        },
        {
          title: 'Icon',
          desc: 'Icon usage'
        },
        {
          title: 'progress spinner',
          desc: 'A circular indicators of progress and activity'
        },
        {
          title: 'progress bar',
          desc: 'A horizontal progress-bar for indicating progress and activity'
        }
      ]
    },
    {
      title: 'popups & modals',
      components: [
        {
          title: 'dialog',
          desc: 'Modal dialogs'
        },
        { title: 'snackbar', desc: 'Snack-bar notification' },
        {
          title: 'tooltip',
          desc: 'Provides a text label that is displayed by hover interaction'
        },
        {
          title: 'login',
          desc: 'Login modal'
        }
      ]
    },
    {
      title: 'data table',
      components: [
        {
          title: 'paginator',
          desc: 'Providers navigation for paged information'
        },
        {
          title: 'table',
          desc: 'Styled data-table taht can be used to display rows of data'
        },
        { title: 'no data', desc: 'Help the user know when there is no data' },
        {
          title: 'feedback indicator',
          desc: 'Inform user about important changes or persistent conditions'
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

  constructor() {}

  ngOnInit() {}
}

@NgModule({
  imports: [MatIconModule, CommonModule],
  exports: [ComponentsComponent],
  declarations: [ComponentsComponent]
})
export class ComponentsModule {}
