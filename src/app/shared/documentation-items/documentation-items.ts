import { Injectable } from '@angular/core';

export interface DocItem {
  id: string;
  name: string;
  packageName?: string;
  examples?: string[];
}

export interface DocCategory {
  id: string;
  name: string;
  items: DocItem[];
  summary?: string;
}
const COMPONENTS = 'components'

const DOCS: {[key: string]: DocCategory[]} = {
  [COMPONENTS]: [
    {
      id: 'button&indicatiors',
      name: 'Button & Indicatiors',
      items: [
        {id: 'progressspinner', name: 'ProgressSpinnerBasic', examples: ['progress-spinner-basic']},
        {id: 'sidenav', name: 'SidenavBasic', examples: ['sidenav-basic']},
        {id: 'feedbackindicatorwarning', name: 'FeedbackIndicatorWarning', examples: ['feedback-indicator-warning']},
        {id: 'feedbackindicator', name: 'FeedbackIndicatorBasic', examples: ['feedback-indicator-basic']},
        {id: 'nodata', name: 'NodataBasic', examples: ['nodata-basic']},
        {id: 'card', name: 'CardBasic', examples: ['card-basic']},
        {id: 'paginator', name: 'PaginatorBasic', examples: ['paginator-basic']},
        {id: 'tooltip', name: 'TooltipBasic', examples: ['tooltip-basic']},
        {id: 'footer', name: 'FooterBasic', examples: ['footer-basic']},
        {id: 'header', name: 'HeaderBasic', examples: ['header-basic']},
        {id: 'snackbarmobile', name: 'SnackbarMobile', examples: ['snackbar-mobile']},
        {id: 'snackbar', name: 'SnackbarBasic', examples: ['snackbar-basic']},
        {id: 'dialog', name: 'DialogBasic', examples: ['dialog-basic']},
        {id: 'tabsnarrow', name: 'TabsNarrow', examples: ['tabs-narrow']},
        {id: 'tabs', name: 'Tabs', examples: ['tabs']},
        // {id: 'chipprimary', name: 'ChipPrimary', examples: ['chip-primary']},
        // {id: 'listnodivider', name: 'ListNodivider', examples: ['list-nodivider']},
        // {id: 'menunested', name: 'MenuNested', examples: ['menu-nested']},
        {id: 'button', name: 'Button', examples: ['button-basic']},
        {id: 'datepicker', name: 'DatePicker', examples: ['date-picker-basic']},
        {id: 'select', name: 'Select', examples: ['select-basic']},
        {id: 'checkbox', name: 'Checkbox', examples: ['checkbox-basic']},
        {id: 'menu', name: 'Menu', examples: ['menu-basic']},
        {id: 'formfield', name: 'Form field', examples: ['form-field-basic']},
        {id: 'radio', name: 'Radio button', examples: ['radio-button-basic']},
        {id: 'tree', name: 'Tree', examples: ['tree-basic']},
        {id: 'slider', name: 'Slider', examples: ['slider-basic']},
        {id: 'slidetoggle', name: 'Slide toggle', examples: ['slide-toggle-basic']},
        {id: 'icon', name: 'Icon', examples: ['icon-basic']},
        {id: 'expansionpanel', name: 'Expansion Panel', examples: ['expansion-panel-basic']},
        {id: 'toolbar', name: 'Toolbar', examples: ['toolbar-basic']},
        {id: 'list', name: 'List', examples: ['list-basic']},
        {id: 'chip', name: 'Chip', examples: ['chip-basic']},
        {id: 'badge', name: 'Badge', examples: ['badge-basic']},
        {id: 'progressbar', name: 'Progress Bar', examples: ['progress-bar-basic']},
        {id: 'headerfooter', name: 'Header Footer', examples: ['header-footer-basic']},
        {id: 'developers', name: 'Developers'},
        {id: 'login', name: 'Login', examples: ['login-basic']},
      ]
    },
  ],
};

for (let category of DOCS[COMPONENTS]) {
  for (let doc of category.items) {
    doc.packageName = 'material';
  }
}

const ALL_COMPONENTS = DOCS[COMPONENTS].reduce(
  (result, category) => result.concat(category.items), []);
const ALL_DOCS = ALL_COMPONENTS;

@Injectable()
export class DocumentationItems {
  getCategories(section: string): DocCategory[] {
    return DOCS[section];
  }

  getItems(section: string): DocItem[] {
    return ALL_COMPONENTS;
  }

  getItemById(id: string): DocItem {
    return ALL_DOCS.find(doc => doc.id === id);
  }
}
