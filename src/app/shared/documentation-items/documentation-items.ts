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
const COMPONENTS = 'components';

const DOCS: {[key: string]: DocCategory[]} = {
  [COMPONENTS]: [
    {
      id: 'buttons&indicators',
      name: 'Buttons & Indicators',
      items: [
        {id: 'slidetoggleconfigurable', name: 'SlideToggleConfigurable', examples: ['slide-toggle-configurable']},
        {id: 'tabsnavbar', name: 'TabsNavBar', examples: ['tabs-nav-bar']},
        {id: 'tabsheaderbottom', name: 'TabsHeaderBottom', examples: ['tabs-header-bottom']},
        {id: 'buttontogglesecondarycolor', name: 'ButtontoggleSecondaryColor', examples: ['buttontoggle-secondary-color']},
        {id: 'buttontoggletwoicon', name: 'ButtontoggleTwoIcon', examples: ['buttontoggle-two-icon']},
        {id: 'buttontogglethreeicon', name: 'ButtontoggleThreeIcon', examples: ['buttontoggle-three-icon']},
        {id: 'buttontoggletwotext', name: 'ButtontoggleTwoText', examples: ['buttontoggle-two-text']},
        {id: 'buttontoggledisable', name: 'ButtontoggleDisable', examples: ['buttontoggle-disable']},
        {id: 'buttontogglethreetext', name: 'ButtontoggleThreeText', examples: ['buttontoggle-three-text']},
        {id: 'buttontoggle', name: 'ButtontoggleBasic', examples: ['buttontoggle-basic']},
        {id: 'fileupload', name: 'FileUploadBasic', examples: ['file-upload-basic']},
        {id: 'dialogcomplex', name: 'DialogComplex', examples: ['dialog-complex']},
        {id: 'dialogconfirmation', name: 'DialogConfirmation', examples: ['dialog-confirmation']},
        {id: 'dialogcontent', name: 'DialogContent', examples: ['dialog-content']},
        {id: 'dialogdata', name: 'DialogData', examples: ['dialog-data']},
        {id: 'dialogalert', name: 'DialogAlert', examples: ['dialog-alert']},
        {id: 'selecttriggertext', name: 'SelectTriggerText', examples: ['select-trigger-text']},
        {id: 'selectmultipleselection', name: 'SelectMultipleSelection', examples: ['select-multiple-selection']},
        {id: 'selectgroupoption', name: 'SelectGroupOption', examples: ['select-group-option']},
        {id: 'selecterrorstate', name: 'SelectErrorState', examples: ['select-error-state']},
        {id: 'treecheckboxmaterial', name: 'TreeCheckboxMaterial', examples: ['tree-checkbox-material']},
        {id: 'treepartiallyloaded', name: 'TreePartiallyLoaded', examples: ['tree-partially-loaded']},
        {id: 'treenestednodes', name: 'TreeNestedNodes', examples: ['tree-nested-nodes']},
        {id: 'treeflatnodes', name: 'TreeFlatNodes', examples: ['tree-flat-nodes']},
        {id: 'treedynamicdata', name: 'TreeDynamicData', examples: ['tree-dynamic-data']},
        {id: 'menuicon', name: 'MenuIcon', examples: ['menu-icon']},
        {id: 'datepickerrangevalidation', name: 'DatePickerRangeValidation', examples: ['date-picker-range-validation']},
        {id: 'datepickeremulating', name: 'DatePickerEmulating', examples: ['date-picker-emulating']},
        {id: 'datepickerfiltervalidation', name: 'DatePickerFilterValidation', examples: ['date-picker-filter-validation']},
        {id: 'datepickerminmaxvalidation', name: 'DatePickerMinMaxValidation', examples: ['date-picker-min-max-validation']},
        {id: 'datepickerselectedvalue', name: 'DatePickerSelectedValue', examples: ['date-picker-selected-value']},
        {id: 'datepickerstartdate', name: 'DatePickerStartDate', examples: ['date-picker-start-date']},
        {id: 'tabscustomlabel', name: 'TabsCustomLabel', examples: ['tabs-custom-label']},
        {id: 'tabstheme', name: 'TabsTheme', examples: ['tabs-theme']},
        {id: 'formfieldautocompletegroup', name: 'FormFieldAutocompleteGroup', examples: ['form-field-autocomplete-group']},
        {id: 'formfieldautocompleteicon', name: 'FormFieldAutocompleteIcon', examples: ['form-field-autocomplete-icon']},
        {id: 'formfieldcustomphonenumber', name: 'FormFieldCustomPhoneNumber', examples: ['form-field-custom-phone-number']},
        {id: 'formfieldprefixsuffix', name: 'FormFieldPrefixSuffix', examples: ['form-field-prefix-suffix']},
        {id: 'formfieldclearbutton', name: 'FormFieldClearButton', examples: ['form-field-clear-button']},
        {id: 'loginokta', name: 'LoginOkta', examples: ['login-okta']},
        {id: 'divider', name: 'Divider', examples: ['divider']},
        {id: 'iconography', name: 'Iconography', examples: ['iconography']},
        {id: 'steppercustom', name: 'StepperCustom', examples: ['stepper-custom']},
        {id: 'customstepper', name: 'CustomStepper', examples: ['custom-stepper']},
        {id: 'steppervertical', name: 'StepperVertical', examples: ['stepper-vertical']},
        {id: 'formfieldvalidation', name: 'FormFieldValidation', examples: ['form-field-validation']},
        {id: 'datepickersingleerror', name: 'DatePickerSingleError', examples: ['date-picker-single-error']},
        {id: 'expansionpanelangular', name: 'ExpansionPanelAngular', examples: ['expansion-panel-angular']},
        {id: 'customerselect', name: 'CustomerSelect', examples: ['customer-select']},
        {id: 'formfieldautocomplete', name: 'FormFieldAutocomplete', examples: ['form-field-autocomplete']},
        {id: 'monthpickerrange', name: 'MonthPickerRange', examples: ['month-picker-range']},
        {id: 'monthpickersingle', name: 'MonthPickerSingle', examples: ['month-picker-single']},
        {id: 'httpstatus', name: ''},
        {id: 'okta', name: ''},
        {id: 'applicationtemplates', name: ''},
        {id: 'colors', name: ''},
        {id: 'typography', name: ''},
        {id: 'search', name: 'SearchBasic', examples: ['search-basic']},
        {id: 'misc', name: 'Misc'},
        {id: 'breadscrumbbasic', name: 'BreadscrumbBasic', examples: ['breadscrumb-basic']},
        {id: 'bottomsheet', name: 'BottomsheetBasic', examples: ['bottomsheet-basic']},
        {id: 'stepper', name: 'StepperBasic', examples: ['stepper-basic']},
        {id: 'expansionpaneltable', name: 'ExpansionPanelTable', examples: ['expansion-panel-table']},
        {id: 'tablenative', name: 'TableNative', examples: ['table-native']},
        {id: 'table', name: 'TableBasic', examples: ['table-basic']},
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
        {id: 'designers', name: 'Designers'},
        {id: 'login', name: 'Login', examples: ['login-basic']},
      ]
    },
  ],
};

for (const category of DOCS[COMPONENTS]) {
  for (const doc of category.items) {
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
