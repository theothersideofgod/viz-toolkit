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
        {id: 'button', name: 'Button', examples: ['button-basic']},
        {id: 'datepicker', name: 'DatePicker', examples: ['date-picker-basic']},
        {id: 'select', name: 'Select', examples: ['select-basic']},
        {id: 'checkbox', name: 'Checkbox', examples: ['checkbox-basic']},
        {id: 'menu', name: 'Menu', examples: ['menu-basic']},
        {id: 'formfield', name: 'Form field', examples: ['form-field-basic']},
        {id: 'radio', name: 'Radio button', examples: ['radio-button-basic']},
        {id: 'tree', name: 'Tree', examples: ['tree-basic']},
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
