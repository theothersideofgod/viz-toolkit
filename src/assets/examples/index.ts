import { NgModule } from '@angular/core';
import { MaterialModule } from '../../app/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import * as VizModules from 'libs';

import {
  VizHeaderModule,
  VizDateRangePickerModule,
  VizSelectModule,
  VizFooterModule,
  VizMenuModule,
  VizCheckboxModule,
  VizButtonModule,
  VizFormFieldModule,
  VizTreeModule,
  VizSliderModule,
  VizToolbarModule,
  VizIconModule,
  VizListModule,
  VizChipModule,
  VizBadgeModule,
  VizTabsModule,
  VizDialogModule,
  VizLoginModule,
  VizNodataModule,
  VizFeedbackIndicatorModule,
  VizSidenavModule,
  VizProgressSpinnerModule,
  VizTableModule,
  VizSteppersModule,
  VizBottomSheetModule,
  VizBreadcrumbModule,
  VizSearchModule,
  VizChartModule,
  CustomerSelectModule,
  CustomStepperModule,
  VizLoginOktaModule,
  VizButtonToggleModule,
  VizFileUploadModule
} from 'libs';

import { SelectErrorStateMatcherComponent } from './select-error-state-matcher/select-error-state-matcher.component';
import { SelectPanelClassComponent } from './select-panel-class/select-panel-class.component';
import { SelectNoRippleComponent } from './select-no-ripple/select-no-ripple.component';
import { SelectCustomTriggerComponent } from './select-custom-trigger/select-custom-trigger.component';
import { SelectMultipleComponent } from './select-multiple/select-multiple.component';
import { SelectOptgroupComponent } from './select-optgroup/select-optgroup.component';
import { SelectResetComponent } from './select-reset/select-reset.component';
import { SelectDisabledComponent } from './select-disabled/select-disabled.component';
import { SelectHintErrorComponent } from './select-hint-error/select-hint-error.component';
import { SelectFormComponent } from './select-form/select-form.component';
import { SelectValueBindingComponent } from './select-value-binding/select-value-binding.component';
import { SelectOverviewComponent } from './select-overview/select-overview.component';
import { InputPrefixSuffixComponent } from './input-prefix-suffix/input-prefix-suffix.component';
import { InputHintComponent } from './input-hint/input-hint.component';
import { InputFormComponent } from './input-form/input-form.component';
import { InputErrorsComponent } from './input-errors/input-errors.component';
import { InputClearableComponent } from './input-clearable/input-clearable.component';
import { TextFieldAutosizeTextareaComponent } from './text-field-autosize-textarea/text-field-autosize-textarea.component';
import { InputErrorStateMatcherComponent } from './input-error-state-matcher/input-error-state-matcher.component';
import { InputOverviewComponent } from './input-overview/input-overview.component';
import {
  FormFieldCustomControlComponent,
  MyTelInput
} from './form-field-custom-control/form-field-custom-control.component';
import { FormFieldThemingComponent } from './form-field-theming/form-field-theming.component';
import { FormFieldPrefixSuffixComponent } from './form-field-prefix-suffix/form-field-prefix-suffix.component';
import { FormFieldErrorComponent } from './form-field-error/form-field-error.component';
import { FormFieldHintComponent } from './form-field-hint/form-field-hint.component';
import { FormFieldAppearanceComponent } from './form-field-appearance/form-field-appearance.component';
import { FormFieldLabelComponent } from './form-field-label/form-field-label.component';
import { FormFieldOverviewComponent } from './form-field-overview/form-field-overview.component';
import { ExpansionStepsComponent } from './expansion-steps/expansion-steps.component';
import { ExpansionOverviewComponent } from './expansion-overview/expansion-overview.component';
import { GridListOverviewComponent } from './grid-list-overview/grid-list-overview.component';
import { GridListDynamicComponent } from './grid-list-dynamic/grid-list-dynamic.component';
import { ListSelectionComponent } from './list-selection/list-selection.component';
import { ListOverviewComponent } from './list-overview/list-overview.component';
import { ListSectionsComponent } from './list-sections/list-sections.component';
import { TooltipAutoHideComponent } from './tooltip-auto-hide/tooltip-auto-hide.component';
import { TooltipModifiedDefaultsComponent } from './tooltip-modified-defaults/tooltip-modified-defaults.component';
import { TooltipMessageComponent } from './tooltip-message/tooltip-message.component';
import { TooltipManualComponent } from './tooltip-manual/tooltip-manual.component';
import { TooltipDisabledComponent } from './tooltip-disabled/tooltip-disabled.component';
import { TooltipDelayComponent } from './tooltip-delay/tooltip-delay.component';
import { TooltipCustomClassComponent } from './tooltip-custom-class/tooltip-custom-class.component';
import { TooltipPositionComponent } from './tooltip-position/tooltip-position.component';
import { TooltipOverviewComponent } from './tooltip-overview/tooltip-overview.component';
import { DividerOverviewComponent } from './divider-overview/divider-overview.component';
import { DatepickerDateClassComponent } from './datepicker-date-class/datepicker-date-class.component';
import {
  DatepickerCustomHeaderComponent,
  ExampleHeader
} from './datepicker-custom-header/datepicker-custom-header.component';
import { DatepickerColorComponent } from './datepicker-color/datepicker-color.component';
import { DatepickerViewsSelectionComponent } from './datepicker-views-selection/datepicker-views-selection.component';
import { DatepickerCustomIconComponent } from './datepicker-custom-icon/datepicker-custom-icon.component';
import { DatepickerFormatsComponent } from './datepicker-formats/datepicker-formats.component';
import { DatepickerMomentComponent } from './datepicker-moment/datepicker-moment.component';
import { DatepickerLocaleComponent } from './datepicker-locale/datepicker-locale.component';
import { DatepickerApiComponent } from './datepicker-api/datepicker-api.component';
import { DatepickerTouchComponent } from './datepicker-touch/datepicker-touch.component';
import { DatepickerDisabledComponent } from './datepicker-disabled/datepicker-disabled.component';
import { DatepickerEventsComponent } from './datepicker-events/datepicker-events.component';
import { DatepickerFilterComponent } from './datepicker-filter/datepicker-filter.component';
import { DatepickerMinMaxComponent } from './datepicker-min-max/datepicker-min-max.component';
import { DatepickerValueComponent } from './datepicker-value/datepicker-value.component';
import { DatepickerStartViewComponent } from './datepicker-start-view/datepicker-start-view.component';
import { DatepickerOverviewComponent } from './datepicker-overview/datepicker-overview.component';
import { TreeLoadmoreComponent } from './tree-loadmore/tree-loadmore.component';
import { TreeNestedOverviewComponent } from './tree-nested-overview/tree-nested-overview.component';
import { TreeChecklistComponent } from './tree-checklist/tree-checklist.component';
import { TreeFlatOverviewComponent } from './tree-flat-overview/tree-flat-overview.component';
import { TreeDynamicComponent } from './tree-dynamic/tree-dynamic.component';
import {
  DialogContentComponent,
  DialogContentExampleDialog
} from './dialog-content/dialog-content.component';
import {
  DialogDataComponent,
  DialogDataExampleDialog
} from './dialog-data/dialog-data.component';
import {
  DialogOverviewComponent,
  DialogOverviewExampleDialog
} from './dialog-overview/dialog-overview.component';
import { SnackBarOverviewComponent } from './snack-bar-overview/snack-bar-overview.component';
import {
  SnackBarComponentComponent,
  PizzaPartyComponent
} from './snack-bar-component/snack-bar-component.component';
import { TabGroupAnimationsComponent } from './tab-group-animations/tab-group-animations.component';
import { TabGroupAlignComponent } from './tab-group-align/tab-group-align.component';
import { TabNavBarBasicComponent } from './tab-nav-bar-basic/tab-nav-bar-basic.component';
import { TabGroupAsyncComponent } from './tab-group-async/tab-group-async.component';
import { TabGroupThemeComponent } from './tab-group-theme/tab-group-theme.component';
import { TabGroupStretchedComponent } from './tab-group-stretched/tab-group-stretched.component';
import { TabGroupLazyLoadedComponent } from './tab-group-lazy-loaded/tab-group-lazy-loaded.component';
import { TabGroupHeaderBelowComponent } from './tab-group-header-below/tab-group-header-below.component';
import { TabGroupDynamicComponent } from './tab-group-dynamic/tab-group-dynamic.component';
import { TabGroupDynamicHeightComponent } from './tab-group-dynamic-height/tab-group-dynamic-height.component';
import { TabGroupCustomLabelComponent } from './tab-group-custom-label/tab-group-custom-label.component';
import { TabGroupBasicComponent } from './tab-group-basic/tab-group-basic.component';
import { StepperErrorsComponent } from './stepper-errors/stepper-errors.component';
import { StepperStatesComponent } from './stepper-states/stepper-states.component';
import { StepperEditableComponent } from './stepper-editable/stepper-editable.component';
import { StepperOptionalComponent } from './stepper-optional/stepper-optional.component';
import { StepperLabelPositionBottomComponent } from './stepper-label-position-bottom/stepper-label-position-bottom.component';
import { StepperVerticalComponent } from './stepper-vertical/stepper-vertical.component';
import { StepperOverviewComponent } from './stepper-overview/stepper-overview.component';
import {
  ButtonFloatingMiniComponent,
  ButtonFloatingMiniData
} from './button-floating-mini/button-floating-mini.component';
import { BadgeButtonComponent } from './badge-button/badge-button.component';
import { BadgeTextComponent } from './badge-text/badge-text.component';
import { RippleOverviewComponent } from './ripple-overview/ripple-overview.component';
import {
  ButtonFloatingComponent,
  ButtonFloatingData
} from './button-floating/button-floating.component';
import {
  ButtonIconComponent,
  ButtonIconData
} from './button-icon/button-icon.component';
import {
  ButtonFlatComponent,
  ButtonFlatData
} from './button-flat/button-flat.component';
import {
  ButtonRaisedComponent,
  ButtonRaisedData
} from './button-raised/button-raised.component';
import {
  ChipStackedComponent,
  ChipStackedData
} from './chip-stacked/chip-stacked.component';
import {
  ChipWithInputComponent,
  ChipWithInputData
} from './chip-with-input/chip-with-input.component';
import {
  ChipAutocompleteComponent,
  ChipAutocompleteData
} from './chip-autocomplete/chip-autocomplete.component';
import {
  CheckboxConfigurableComponent,
  CheckboxConfigurableData
} from './checkbox-configurable/checkbox-configurable.component';
import {
  SlideToggleConfigurableComponent,
  SlideToggleConfigurableData
} from './slide-toggle-configurable/slide-toggle-configurable.component';
import {
  RadioWidthNgmodelComponent,
  RadioWidthNgmodelData
} from './radio-width-ngmodel/radio-width-ngmodel.component';
import {
  SliderConfigurableComponent,
  SliderConfigurableData
} from './slider-configurable/slider-configurable.component';
import {
  SliderFormattingComponent,
  SliderFormattingData
} from './slider-formatting/slider-formatting.component';
import {
  PaginatorConfigurableComponent,
  PaginatorConfigurableData
} from './paginator-configurable/paginator-configurable.component';
import {
  SortTableComponent,
  SortTableData
} from './sort-table/sort-table.component';
import {
  SortOverviewComponent,
  SortOverviewData
} from './sort-overview/sort-overview.component';
import {
  AutocompleteOverviewComponent,
  AutocompleteOverviewData
} from './autocomplete-overview/autocomplete-overview.component';
import {
  AutocompleteOptgroupComponent,
  AutocompleteOptgroupData
} from './autocomplete-optgroup/autocomplete-optgroup.component';
import {
  AutocompleteHighlightComponent,
  AutocompleteHighlightData
} from './autocomplete-highlight/autocomplete-highlight.component';
import {
  AutocompleteDisplayComponent,
  AutocompleteDisplayData
} from './autocomplete-display/autocomplete-display.component';
import {
  AutocompleteFilterComponent,
  AutocompleteFilterData
} from './autocomplete-filter/autocomplete-filter.component';
import {
  AutocompleteSimpleComponent,
  AutocompleteSimpleData
} from './autocomplete-simple/autocomplete-simple.component';
import {
  CardFancyComponent,
  CardFancyData
} from './card-fancy/card-fancy.component';
import {
  ButtontoggleSecondaryColorComponent,
  ButtontoggleSecondaryColorData
} from './buttontoggle-secondary-color/buttontoggle-secondary-color.component';
import {
  ButtontoggleTwoIconComponent,
  ButtontoggleTwoIconData
} from './buttontoggle-two-icon/buttontoggle-two-icon.component';
import {
  ButtontoggleThreeIconComponent,
  ButtontoggleThreeIconData
} from './buttontoggle-three-icon/buttontoggle-three-icon.component';
import {
  ButtontoggleTwoTextComponent,
  ButtontoggleTwoTextData
} from './buttontoggle-two-text/buttontoggle-two-text.component';
import {
  ButtontoggleDisableComponent,
  ButtontoggleDisableData
} from './buttontoggle-disable/buttontoggle-disable.component';
import {
  ButtontoggleThreeTextComponent,
  ButtontoggleThreeTextData
} from './buttontoggle-three-text/buttontoggle-three-text.component';
import {
  ButtontoggleBasicComponent,
  ButtontoggleBasicData
} from './buttontoggle-basic/buttontoggle-basic.component';
import {
  FileUploadBasicComponent,
  FileUploadBasicData
} from './file-upload-basic/file-upload-basic.component';
import {
  MenuIconComponent,
  MenuIconData
} from './menu-icon/menu-icon.component';
import {
  DatePickerRangeValidationComponent,
  DatePickerRangeValidationData
} from './date-picker-range-validation/date-picker-range-validation.component';
import {
  DatePickerEmulatingComponent,
  DatePickerEmulatingData
} from './date-picker-emulating/date-picker-emulating.component';
import {
  DatePickerFilterValidationComponent,
  DatePickerFilterValidationData
} from './date-picker-filter-validation/date-picker-filter-validation.component';
import {
  DatePickerMinMaxValidationComponent,
  DatePickerMinMaxValidationData
} from './date-picker-min-max-validation/date-picker-min-max-validation.component';
import {
  DatePickerSelectedValueComponent,
  DatePickerSelectedValueData
} from './date-picker-selected-value/date-picker-selected-value.component';
import {
  DatePickerStartDateComponent,
  DatePickerStartDateData
} from './date-picker-start-date/date-picker-start-date.component';
import {
  LoginOktaComponent,
  LoginOktaData
} from './login-okta/login-okta.component';
import {
  IconographyComponent,
  IconographyData
} from './iconography/iconography.component';
import {
  DatePickerSingleErrorComponent,
  DatePickerSingleErrorData
} from './date-picker-single-error/date-picker-single-error.component';
import {
  CustomerSelectComponent,
  CustomerSelectData
} from './customer-select/customer-select.component';
import {
  MonthPickerRangeComponent,
  MonthPickerRangeData
} from './month-picker-range/month-picker-range.component';
import {
  MonthPickerSingleComponent,
  MonthPickerSingleData
} from './month-picker-single/month-picker-single.component';
import {
  SliderRangeEventComponent,
  SliderRangeEventData
} from './slider-range-event/slider-range-event.component';
import {
  SliderEventComponent,
  SliderEventData
} from './slider-event/slider-event.component';
import {
  DatePickerEventComponent,
  DatePickerEventData
} from './date-picker-event/date-picker-event.component';
import {
  SliderRangeIconComponent,
  SliderRangeIconData
} from './slider-range-icon/slider-range-icon.component';
import {
  SliderRangeComponent,
  SliderRangeData
} from './slider-range/slider-range.component';
import {
  SliderContinueIconComponent,
  SliderContinueIconData
} from './slider-continue-icon/slider-continue-icon.component';
import {
  SliderContinueComponent,
  SliderContinueData
} from './slider-continue/slider-continue.component';
import {
  SliderBasicIconComponent,
  SliderBasicIconData
} from './slider-basic-icon/slider-basic-icon.component';
import {
  DatePickerSingleComponent,
  DatePickerSingleData
} from './date-picker-single/date-picker-single.component';
import {
  FeedbackIndicatorSuccessComponent,
  FeedbackIndicatorSuccessData
} from './feedback-indicator-success/feedback-indicator-success.component';
import { IconBigComponent, IconBigData } from './icon-big/icon-big.component';
import {
  IconSmallComponent,
  IconSmallData
} from './icon-small/icon-small.component';
import {
  ChipDisableComponent,
  ChipDisableData
} from './chip-disable/chip-disable.component';
import {
  ChipCloseComponent,
  ChipCloseData
} from './chip-close/chip-close.component';
import {
  BadgeIconComponent,
  BadgeIconData
} from './badge-icon/badge-icon.component';
import {
  ButtonDisableComponent,
  ButtonDisableData
} from './button-disable/button-disable.component';
import {
  ButtonIconLeftComponent,
  ButtonIconLeftData
} from './button-icon-left/button-icon-left.component';
import {
  ButtonIconRightComponent,
  ButtonIconRightData
} from './button-icon-right/button-icon-right.component';
import {
  ButtonTextComponent,
  ButtonTextData
} from './button-text/button-text.component';
import {
  ButtonStrokedComponent,
  ButtonStrokedData
} from './button-stroked/button-stroked.component';
import {
  HeaderApplicationComponent,
  HeaderApplicationData
} from './header-application/header-application.component';
import {
  SlideToggleDisableComponent,
  SlideToggleDisableData
} from './slide-toggle-disable/slide-toggle-disable.component';
import {
  RadioButtonDisableComponent,
  RadioButtonDisableData
} from './radio-button-disable/radio-button-disable.component';
import {
  CheckboxDisableComponent,
  CheckboxDisableData
} from './checkbox-disable/checkbox-disable.component';
import {
  CheckboxIndetermineComponent,
  CheckboxIndetermineData
} from './checkbox-indetermine/checkbox-indetermine.component';
import {
  BenchmarkChartBasicComponent,
  BenchmarkChartBasicData
} from './benchmark-chart-basic/benchmark-chart-basic.component';
import {
  ComparativeChartBasicComponent,
  ComparativeChartBasicData
} from './comparative-chart-basic/comparative-chart-basic.component';
import {
  DotPlotChartBasicComponent,
  DotPlotChartBasicData
} from './dot-plot-chart-basic/dot-plot-chart-basic.component';
import {
  ProgressBarChartBasicComponent,
  ProgressBarChartBasicData
} from './progress-bar-chart-basic/progress-bar-chart-basic.component';
import {
  BarChartBasicComponent,
  BarChartBasicData
} from './bar-chart-basic/bar-chart-basic.component';
import {
  LineChartBasicComponent,
  LineChartBasicData
} from './line-chart-basic/line-chart-basic.component';
import {
  SearchBasicComponent,
  SearchBasicData
} from './search-basic/search-basic.component';
import {
  BreadscrumbBasicComponent,
  BreadscrumbBasicData
} from './breadscrumb-basic/breadscrumb-basic.component';
import {
  BottomsheetBasicComponent,
  BottomsheetBasicData
} from './bottomsheet-basic/bottomsheet-basic.component';
import {
  TableNativeComponent,
  TableNativeData
} from './table-native/table-native.component';
import {
  TableBasicComponent,
  TableBasicData
} from './table-basic/table-basic.component';
import {
  ProgressSpinnerBasicComponent,
  ProgressSpinnerBasicData
} from './progress-spinner-basic/progress-spinner-basic.component';
import {
  SidenavBasicComponent,
  SidenavBasicData
} from './sidenav-basic/sidenav-basic.component';
import {
  FeedbackIndicatorWarningComponent,
  FeedbackIndicatorWarningData
} from './feedback-indicator-warning/feedback-indicator-warning.component';
import {
  FeedbackIndicatorBasicComponent,
  FeedbackIndicatorBasicData
} from './feedback-indicator-basic/feedback-indicator-basic.component';
import {
  NodataBasicComponent,
  NodataBasicData
} from './nodata-basic/nodata-basic.component';
import {
  CardBasicComponent,
  CardBasicData
} from './card-basic/card-basic.component';
import {
  PaginatorBasicComponent,
  PaginatorBasicData
} from './paginator-basic/paginator-basic.component';
import {
  FooterBasicComponent,
  FooterBasicData
} from './footer-basic/footer-basic.component';
import {
  HeaderBasicComponent,
  HeaderBasicData
} from './header-basic/header-basic.component';
import {
  ChipPrimaryComponent,
  ChipPrimaryData
} from './chip-primary/chip-primary.component';
import {
  MenuNestedComponent,
  MenuNestedData
} from './menu-nested/menu-nested.component';
import {
  ButtonBasicComponent,
  ButtonBasicData
} from './button-basic/button-basic.component';
import {
  DatePickerBasicComponent,
  DatePickerBasicData
} from './date-picker-basic/date-picker-basic.component';
import {
  CheckboxBasicComponent,
  CheckboxBasicData
} from './checkbox-basic/checkbox-basic.component';
import {
  MenuBasicComponent,
  MenuBasicData
} from './menu-basic/menu-basic.component';
import {
  RadioButtonBasicComponent,
  RadioButtonBasicData
} from './radio-button-basic/radio-button-basic.component';
import {
  SliderBasicComponent,
  SliderBasicData
} from './slider-basic/slider-basic.component';
import {
  SlideToggleBasicComponent,
  SlideToggleBasicData
} from './slide-toggle-basic/slide-toggle-basic.component';
import {
  IconBasicComponent,
  IconBasicData
} from './icon-basic/icon-basic.component';
import {
  ChipBasicComponent,
  ChipBasicData
} from './chip-basic/chip-basic.component';
import {
  ProgressBarBasicComponent,
  ProgressBarBasicData
} from './progress-bar-basic/progress-bar-basic.component';
import {
  HeaderFooterBasicComponent,
  HeaderFooterBasicData
} from './header-footer-basic/header-footer-basic.component';
import {
  LoginBasicComponent,
  LoginBasicData
} from './login-basic/login-basic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule
} from '@angular/material';
export const ALL_EXAMPLE_ITEMS = {
  'select-error-state-matcher': {
    component: SelectErrorStateMatcherComponent
  },
  'select-panel-class': {
    component: SelectPanelClassComponent
  },
  'select-no-ripple': {
    component: SelectNoRippleComponent
  },
  'select-custom-trigger': {
    component: SelectCustomTriggerComponent
  },
  'select-multiple': {
    component: SelectMultipleComponent
  },
  'select-optgroup': {
    component: SelectOptgroupComponent
  },
  'select-reset': {
    component: SelectResetComponent
  },
  'select-disabled': {
    component: SelectDisabledComponent
  },
  'select-hint-error': {
    component: SelectHintErrorComponent
  },
  'select-form': {
    component: SelectFormComponent
  },
  'select-value-binding': {
    component: SelectValueBindingComponent
  },
  'select-overview': {
    component: SelectOverviewComponent
  },
  'input-prefix-suffix': {
    component: InputPrefixSuffixComponent
  },
  'input-hint': {
    component: InputHintComponent
  },
  'input-form': {
    component: InputFormComponent
  },
  'input-errors': {
    component: InputErrorsComponent
  },
  'input-clearable': {
    component: InputClearableComponent
  },
  'text-field-autosize-textarea': {
    component: TextFieldAutosizeTextareaComponent
  },
  'input-error-state-matcher': {
    component: InputErrorStateMatcherComponent
  },
  'input-overview': {
    component: InputOverviewComponent
  },
  'form-field-custom-control': {
    component: FormFieldCustomControlComponent
  },
  'form-field-theming': {
    component: FormFieldThemingComponent
  },
  'form-field-prefix-suffix': {
    component: FormFieldPrefixSuffixComponent
  },
  'form-field-error': {
    component: FormFieldErrorComponent
  },
  'form-field-hint': {
    component: FormFieldHintComponent
  },
  'form-field-appearance': {
    component: FormFieldAppearanceComponent
  },
  'form-field-label': {
    component: FormFieldLabelComponent
  },
  'form-field-overview': {
    component: FormFieldOverviewComponent
  },
  'expansion-steps': {
    component: ExpansionStepsComponent
  },
  'expansion-overview': {
    component: ExpansionOverviewComponent
  },
  'grid-list-overview': {
    component: GridListOverviewComponent
  },
  'grid-list-dynamic': {
    component: GridListDynamicComponent
  },
  'list-selection': {
    component: ListSelectionComponent
  },
  'list-overview': {
    component: ListOverviewComponent
  },
  'list-sections': {
    component: ListSectionsComponent
  },
  'tooltip-auto-hide': {
    component: TooltipAutoHideComponent
  },
  'tooltip-modified-defaults': {
    component: TooltipModifiedDefaultsComponent
  },
  'tooltip-message': {
    component: TooltipMessageComponent
  },
  'tooltip-manual': {
    component: TooltipManualComponent
  },
  'tooltip-disabled': {
    component: TooltipDisabledComponent
  },
  'tooltip-delay': {
    component: TooltipDelayComponent
  },
  'tooltip-custom-class': {
    component: TooltipCustomClassComponent
  },
  'tooltip-position': {
    component: TooltipPositionComponent
  },
  'tooltip-overview': {
    component: TooltipOverviewComponent
  },
  'divider-overview': {
    component: DividerOverviewComponent
  },
  'datepicker-date-class': {
    component: DatepickerDateClassComponent
  },
  'datepicker-custom-header': {
    component: DatepickerCustomHeaderComponent
  },
  'datepicker-color': {
    component: DatepickerColorComponent
  },
  'datepicker-views-selection': {
    component: DatepickerViewsSelectionComponent
  },
  'datepicker-custom-icon': {
    component: DatepickerCustomIconComponent
  },
  'datepicker-formats': {
    component: DatepickerFormatsComponent
  },
  'datepicker-moment': {
    component: DatepickerMomentComponent
  },
  'datepicker-locale': {
    component: DatepickerLocaleComponent
  },
  'datepicker-api': {
    component: DatepickerApiComponent
  },
  'datepicker-touch': {
    component: DatepickerTouchComponent
  },
  'datepicker-disabled': {
    component: DatepickerDisabledComponent
  },
  'datepicker-events': {
    component: DatepickerEventsComponent
  },
  'datepicker-filter': {
    component: DatepickerFilterComponent
  },
  'datepicker-min-max': {
    component: DatepickerMinMaxComponent
  },
  'datepicker-value': {
    component: DatepickerValueComponent
  },
  'datepicker-start-view': {
    component: DatepickerStartViewComponent
  },
  'datepicker-overview': {
    component: DatepickerOverviewComponent
  },
  'tree-loadmore': {
    component: TreeLoadmoreComponent
  },
  'tree-nested-overview': {
    component: TreeNestedOverviewComponent
  },
  'tree-checklist': {
    component: TreeChecklistComponent
  },
  'tree-flat-overview': {
    component: TreeFlatOverviewComponent
  },
  'tree-dynamic': {
    component: TreeDynamicComponent
  },
  'dialog-content': {
    component: DialogContentComponent
  },
  'dialog-data': {
    component: DialogDataComponent
  },
  'dialog-overview': {
    component: DialogOverviewComponent
  },
  'snack-bar-overview': {
    component: SnackBarOverviewComponent
  },
  'snack-bar-component': {
    component: SnackBarComponentComponent
  },
  'tab-group-animations': {
    component: TabGroupAnimationsComponent
  },
  'tab-group-align': {
    component: TabGroupAlignComponent
  },
  'tab-nav-bar-basic': {
    component: TabNavBarBasicComponent
  },
  'tab-group-async': {
    component: TabGroupAsyncComponent
  },
  'tab-group-theme': {
    component: TabGroupThemeComponent
  },
  'tab-group-stretched': {
    component: TabGroupStretchedComponent
  },
  'tab-group-lazy-loaded': {
    component: TabGroupLazyLoadedComponent
  },
  'tab-group-header-below': {
    component: TabGroupHeaderBelowComponent
  },
  'tab-group-dynamic': {
    component: TabGroupDynamicComponent
  },
  'tab-group-dynamic-height': {
    component: TabGroupDynamicHeightComponent
  },
  'tab-group-custom-label': {
    component: TabGroupCustomLabelComponent
  },
  'tab-group-basic': {
    component: TabGroupBasicComponent
  },
  'button-floating-mini': {
    component: ButtonFloatingMiniComponent,
    data: ButtonFloatingMiniData
  },
  'button-floating': {
    component: ButtonFloatingComponent,
    data: ButtonFloatingData
  },
  'button-icon': {
    component: ButtonIconComponent,
    data: ButtonIconData
  },
  'button-flat': {
    component: ButtonFlatComponent,
    data: ButtonFlatData
  },
  'button-raised': {
    component: ButtonRaisedComponent,
    data: ButtonRaisedData
  },
  'chip-stacked': {
    component: ChipStackedComponent,
    data: ChipStackedData
  },
  'chip-with-input': {
    component: ChipWithInputComponent,
    data: ChipWithInputData
  },
  'chip-autocomplete': {
    component: ChipAutocompleteComponent,
    data: ChipAutocompleteData
  },
  'checkbox-configurable': {
    component: CheckboxConfigurableComponent,
    data: CheckboxConfigurableData
  },
  'slide-toggle-configurable': {
    component: SlideToggleConfigurableComponent,
    data: SlideToggleConfigurableData
  },
  'radio-width-ngmodel': {
    component: RadioWidthNgmodelComponent,
    data: RadioWidthNgmodelData
  },
  'slider-configurable': {
    component: SliderConfigurableComponent,
    data: SliderConfigurableData
  },
  'slider-formatting': {
    component: SliderFormattingComponent,
    data: SliderFormattingData
  },
  'paginator-configurable': {
    component: PaginatorConfigurableComponent,
    data: PaginatorConfigurableData
  },
  'sort-table': {
    component: SortTableComponent,
    data: SortTableData
  },
  'sort-overview': {
    component: SortOverviewComponent,
    data: SortOverviewData
  },
  'autocomplete-overview': {
    component: AutocompleteOverviewComponent,
    data: AutocompleteOverviewData
  },
  'autocomplete-optgroup': {
    component: AutocompleteOptgroupComponent,
    data: AutocompleteOptgroupData
  },
  'autocomplete-highlight': {
    component: AutocompleteHighlightComponent,
    data: AutocompleteHighlightData
  },
  'autocomplete-display': {
    component: AutocompleteDisplayComponent,
    data: AutocompleteDisplayData
  },
  'autocomplete-filter': {
    component: AutocompleteFilterComponent,
    data: AutocompleteFilterData
  },
  'autocomplete-simple': {
    component: AutocompleteSimpleComponent,
    data: AutocompleteSimpleData
  },
  'card-fancy': {
    component: CardFancyComponent,
    data: CardFancyData
  },
  'ripple-overview': {
    component: RippleOverviewComponent
  },
  'badge-button': {
    component: BadgeButtonComponent
  },
  'badge-text': {
    component: BadgeTextComponent
  },
  'stepper-errors': {
    component: StepperErrorsComponent
  },
  'stepper-states': {
    component: StepperStatesComponent
  },
  'stepper-editable': {
    component: StepperEditableComponent
  },
  'stepper-optional': {
    component: StepperOptionalComponent
  },
  'stepper-label-position-bottom': {
    component: StepperLabelPositionBottomComponent
  },
  'stepper-vertical': {
    component: StepperVerticalComponent
  },
  'stepper-overview': {
    component: StepperOverviewComponent
  },
  'buttontoggle-secondary-color': {
    component: ButtontoggleSecondaryColorComponent,
    data: ButtontoggleSecondaryColorData
  },
  'buttontoggle-two-icon': {
    component: ButtontoggleTwoIconComponent,
    data: ButtontoggleTwoIconData
  },
  'buttontoggle-three-icon': {
    component: ButtontoggleThreeIconComponent,
    data: ButtontoggleThreeIconData
  },
  'buttontoggle-two-text': {
    component: ButtontoggleTwoTextComponent,
    data: ButtontoggleTwoTextData
  },
  'buttontoggle-disable': {
    component: ButtontoggleDisableComponent,
    data: ButtontoggleDisableData
  },
  'buttontoggle-three-text': {
    component: ButtontoggleThreeTextComponent,
    data: ButtontoggleThreeTextData
  },
  'buttontoggle-basic': {
    component: ButtontoggleBasicComponent,
    data: ButtontoggleBasicData
  },
  'file-upload-basic': {
    component: FileUploadBasicComponent,
    data: FileUploadBasicData
  },
  'menu-icon': {
    component: MenuIconComponent,
    data: MenuIconData
  },
  'date-picker-range-validation': {
    component: DatePickerRangeValidationComponent,
    data: DatePickerRangeValidationData
  },
  'date-picker-emulating': {
    component: DatePickerEmulatingComponent,
    data: DatePickerEmulatingData
  },
  'date-picker-filter-validation': {
    component: DatePickerFilterValidationComponent,
    data: DatePickerFilterValidationData
  },
  'date-picker-min-max-validation': {
    component: DatePickerMinMaxValidationComponent,
    data: DatePickerMinMaxValidationData
  },
  'date-picker-selected-value': {
    component: DatePickerSelectedValueComponent,
    data: DatePickerSelectedValueData
  },
  'date-picker-start-date': {
    component: DatePickerStartDateComponent,
    data: DatePickerStartDateData
  },
  'login-okta': {
    component: LoginOktaComponent,
    data: LoginOktaData
  },
  iconography: {
    component: IconographyComponent,
    data: IconographyData
  },
  'date-picker-single-error': {
    component: DatePickerSingleErrorComponent,
    data: DatePickerSingleErrorData
  },
  'customer-select': {
    component: CustomerSelectComponent,
    data: CustomerSelectData
  },
  'month-picker-range': {
    component: MonthPickerRangeComponent,
    data: MonthPickerRangeData
  },
  'month-picker-single': {
    component: MonthPickerSingleComponent,
    data: MonthPickerSingleData
  },
  'slider-range-event': {
    component: SliderRangeEventComponent,
    data: SliderRangeEventData
  },
  'slider-event': {
    component: SliderEventComponent,
    data: SliderEventData
  },
  'date-picker-event': {
    component: DatePickerEventComponent,
    data: DatePickerEventData
  },
  'slider-range-icon': {
    component: SliderRangeIconComponent,
    data: SliderRangeIconData
  },
  'slider-range': {
    component: SliderRangeComponent,
    data: SliderRangeData
  },
  'slider-continue-icon': {
    component: SliderContinueIconComponent,
    data: SliderContinueIconData
  },
  'slider-continue': {
    component: SliderContinueComponent,
    data: SliderContinueData
  },
  'slider-basic-icon': {
    component: SliderBasicIconComponent,
    data: SliderBasicIconData
  },
  'date-picker-single': {
    component: DatePickerSingleComponent,
    data: DatePickerSingleData
  },
  'feedback-indicator-success': {
    component: FeedbackIndicatorSuccessComponent,
    data: FeedbackIndicatorSuccessData
  },
  'icon-big': {
    component: IconBigComponent,
    data: IconBigData
  },
  'icon-small': {
    component: IconSmallComponent,
    data: IconSmallData
  },
  'chip-disable': {
    component: ChipDisableComponent,
    data: ChipDisableData
  },
  'chip-close': {
    component: ChipCloseComponent,
    data: ChipCloseData
  },
  'badge-icon': {
    component: BadgeIconComponent,
    data: BadgeIconData
  },
  'button-disable': {
    component: ButtonDisableComponent,
    data: ButtonDisableData
  },
  'button-icon-left': {
    component: ButtonIconLeftComponent,
    data: ButtonIconLeftData
  },
  'button-icon-right': {
    component: ButtonIconRightComponent,
    data: ButtonIconRightData
  },
  'button-text': {
    component: ButtonTextComponent,
    data: ButtonTextData
  },
  'button-stroked': {
    component: ButtonStrokedComponent,
    data: ButtonStrokedData
  },
  'header-application': {
    component: HeaderApplicationComponent,
    data: HeaderApplicationData
  },
  'slide-toggle-disable': {
    component: SlideToggleDisableComponent,
    data: SlideToggleDisableData
  },
  'radio-button-disable': {
    component: RadioButtonDisableComponent,
    data: RadioButtonDisableData
  },
  'checkbox-disable': {
    component: CheckboxDisableComponent,
    data: CheckboxDisableData
  },
  'checkbox-indetermine': {
    component: CheckboxIndetermineComponent,
    data: CheckboxIndetermineData
  },
  'benchmark-chart-basic': {
    component: BenchmarkChartBasicComponent,
    data: BenchmarkChartBasicData
  },
  'comparative-chart-basic': {
    component: ComparativeChartBasicComponent,
    data: ComparativeChartBasicData
  },
  'dot-plot-chart-basic': {
    component: DotPlotChartBasicComponent,
    data: DotPlotChartBasicData
  },
  'progress-bar-chart-basic': {
    component: ProgressBarChartBasicComponent,
    data: ProgressBarChartBasicData
  },
  'bar-chart-basic': {
    component: BarChartBasicComponent,
    data: BarChartBasicData
  },
  'line-chart-basic': {
    component: LineChartBasicComponent,
    data: LineChartBasicData
  },
  'search-basic': {
    component: SearchBasicComponent,
    data: SearchBasicData
  },
  'breadscrumb-basic': {
    component: BreadscrumbBasicComponent,
    data: BreadscrumbBasicData
  },
  'bottomsheet-basic': {
    component: BottomsheetBasicComponent,
    data: BottomsheetBasicData
  },
  'table-native': {
    component: TableNativeComponent,
    data: TableNativeData
  },
  'table-basic': {
    component: TableBasicComponent,
    data: TableBasicData
  },
  'progress-spinner-basic': {
    component: ProgressSpinnerBasicComponent,
    data: ProgressSpinnerBasicData
  },
  'sidenav-basic': {
    component: SidenavBasicComponent,
    data: SidenavBasicData
  },
  'feedback-indicator-warning': {
    component: FeedbackIndicatorWarningComponent,
    data: FeedbackIndicatorWarningData
  },
  'feedback-indicator-basic': {
    component: FeedbackIndicatorBasicComponent,
    data: FeedbackIndicatorBasicData
  },
  'nodata-basic': {
    component: NodataBasicComponent,
    data: NodataBasicData
  },
  'card-basic': {
    component: CardBasicComponent,
    data: CardBasicData
  },
  'paginator-basic': {
    component: PaginatorBasicComponent,
    data: PaginatorBasicData
  },
  'footer-basic': {
    component: FooterBasicComponent,
    data: FooterBasicData
  },
  'header-basic': {
    component: HeaderBasicComponent,
    data: HeaderBasicData
  },
  'chip-primary': {
    component: ChipPrimaryComponent,
    data: ChipPrimaryData
  },
  'menu-nested': {
    component: MenuNestedComponent,
    data: MenuNestedData
  },
  'button-basic': {
    component: ButtonBasicComponent,
    data: ButtonBasicData
  },
  'date-picker-basic': {
    component: DatePickerBasicComponent,
    data: DatePickerBasicData
  },
  'checkbox-basic': {
    component: CheckboxBasicComponent,
    data: CheckboxBasicData
  },
  'menu-basic': {
    component: MenuBasicComponent,
    data: MenuBasicData
  },
  'radio-button-basic': {
    component: RadioButtonBasicComponent,
    data: RadioButtonBasicData
  },
  'slider-basic': {
    component: SliderBasicComponent,
    data: SliderBasicData
  },
  'slide-toggle-basic': {
    component: SlideToggleBasicComponent,
    data: SlideToggleBasicData
  },
  'icon-basic': {
    component: IconBasicComponent,
    data: IconBasicData
  },
  'chip-basic': {
    component: ChipBasicComponent,
    data: ChipBasicData
  },
  'progress-bar-basic': {
    component: ProgressBarBasicComponent,
    data: ProgressBarBasicData
  },
  'header-footer-basic': {
    component: HeaderFooterBasicComponent,
    data: HeaderFooterBasicData
  },
  'login-basic': {
    component: LoginBasicComponent,
    data: LoginBasicData
  }
};
// console.log(Object.keys(VizModules).join(','));
@NgModule({
  declarations: [
    SelectErrorStateMatcherComponent,
    SelectPanelClassComponent,
    SelectNoRippleComponent,
    SelectCustomTriggerComponent,
    SelectMultipleComponent,
    SelectOptgroupComponent,
    SelectResetComponent,
    SelectDisabledComponent,
    SelectHintErrorComponent,
    SelectFormComponent,
    SelectValueBindingComponent,
    SelectOverviewComponent,
    InputPrefixSuffixComponent,
    InputHintComponent,
    InputFormComponent,
    InputErrorsComponent,
    InputClearableComponent,
    TextFieldAutosizeTextareaComponent,
    InputErrorStateMatcherComponent,
    InputOverviewComponent,
    MyTelInput,
    FormFieldCustomControlComponent,
    FormFieldThemingComponent,
    FormFieldPrefixSuffixComponent,
    FormFieldErrorComponent,
    FormFieldHintComponent,
    FormFieldAppearanceComponent,
    FormFieldLabelComponent,
    FormFieldOverviewComponent,
    ExpansionStepsComponent,
    ExpansionOverviewComponent,
    GridListOverviewComponent,
    GridListDynamicComponent,
    ListSelectionComponent,
    ListOverviewComponent,
    ListSectionsComponent,
    TooltipAutoHideComponent,
    TooltipModifiedDefaultsComponent,
    TooltipMessageComponent,
    TooltipManualComponent,
    TooltipDisabledComponent,
    TooltipDelayComponent,
    TooltipCustomClassComponent,
    TooltipPositionComponent,
    TooltipOverviewComponent,
    DividerOverviewComponent,
    ExampleHeader,
    DatepickerDateClassComponent,
    DatepickerCustomHeaderComponent,
    DatepickerColorComponent,
    DatepickerViewsSelectionComponent,
    DatepickerCustomIconComponent,
    DatepickerFormatsComponent,
    DatepickerMomentComponent,
    DatepickerLocaleComponent,
    DatepickerApiComponent,
    DatepickerTouchComponent,
    DatepickerDisabledComponent,
    DatepickerEventsComponent,
    DatepickerFilterComponent,
    DatepickerMinMaxComponent,
    DatepickerValueComponent,
    DatepickerStartViewComponent,
    DatepickerOverviewComponent,
    TreeLoadmoreComponent,
    TreeNestedOverviewComponent,
    TreeChecklistComponent,
    TreeFlatOverviewComponent,
    TreeDynamicComponent,
    DialogContentExampleDialog,
    DialogDataExampleDialog,
    DialogOverviewExampleDialog,
    DialogContentComponent,
    DialogDataComponent,
    DialogOverviewComponent,
    PizzaPartyComponent,
    SnackBarOverviewComponent,
    SnackBarComponentComponent,
    TabGroupAnimationsComponent,
    TabGroupAlignComponent,
    TabNavBarBasicComponent,
    TabGroupAsyncComponent,
    TabGroupThemeComponent,
    TabGroupStretchedComponent,
    TabGroupLazyLoadedComponent,
    TabGroupHeaderBelowComponent,
    TabGroupDynamicComponent,
    TabGroupDynamicHeightComponent,
    TabGroupCustomLabelComponent,
    TabGroupBasicComponent,
    ButtonFloatingMiniComponent,
    ButtonFloatingComponent,
    ButtonIconComponent,
    ButtonFlatComponent,
    ButtonRaisedComponent,
    ChipStackedComponent,
    ChipWithInputComponent,
    ChipAutocompleteComponent,
    CheckboxConfigurableComponent,
    SlideToggleConfigurableComponent,
    RadioWidthNgmodelComponent,
    SliderConfigurableComponent,
    SliderFormattingComponent,
    PaginatorConfigurableComponent,
    SortTableComponent,
    SortOverviewComponent,
    AutocompleteOverviewComponent,
    AutocompleteOptgroupComponent,
    AutocompleteHighlightComponent,
    AutocompleteDisplayComponent,
    AutocompleteFilterComponent,
    AutocompleteSimpleComponent,
    CardFancyComponent,
    RippleOverviewComponent,
    BadgeButtonComponent,
    BadgeTextComponent,
    StepperErrorsComponent,
    StepperStatesComponent,
    StepperEditableComponent,
    StepperOptionalComponent,
    StepperLabelPositionBottomComponent,
    StepperVerticalComponent,
    StepperOverviewComponent,
    ButtontoggleSecondaryColorComponent,
    ButtontoggleTwoIconComponent,
    ButtontoggleThreeIconComponent,
    ButtontoggleTwoTextComponent,
    ButtontoggleDisableComponent,
    ButtontoggleThreeTextComponent,
    ButtontoggleBasicComponent,
    FileUploadBasicComponent,
    DialogContentComponent,
    DialogDataComponent,
    MenuIconComponent,
    DatePickerRangeValidationComponent,
    DatePickerEmulatingComponent,
    DatePickerFilterValidationComponent,
    DatePickerMinMaxValidationComponent,
    DatePickerSelectedValueComponent,
    DatePickerStartDateComponent,
    LoginOktaComponent,
    IconographyComponent,
    DatePickerSingleErrorComponent,
    CustomerSelectComponent,
    MonthPickerRangeComponent,
    MonthPickerSingleComponent,
    SliderRangeEventComponent,
    SliderEventComponent,
    DatePickerEventComponent,
    SliderRangeIconComponent,
    SliderRangeComponent,
    SliderContinueIconComponent,
    SliderContinueComponent,
    SliderBasicIconComponent,
    DatePickerSingleComponent,
    FeedbackIndicatorSuccessComponent,
    IconBigComponent,
    IconSmallComponent,
    ChipDisableComponent,
    ChipCloseComponent,
    BadgeIconComponent,
    ButtonDisableComponent,
    ButtonIconLeftComponent,
    ButtonIconRightComponent,
    ButtonTextComponent,
    ButtonStrokedComponent,
    HeaderApplicationComponent,
    SlideToggleDisableComponent,
    RadioButtonDisableComponent,
    CheckboxDisableComponent,
    CheckboxIndetermineComponent,
    BenchmarkChartBasicComponent,
    ComparativeChartBasicComponent,
    DotPlotChartBasicComponent,
    ProgressBarChartBasicComponent,
    ProgressBarBasicComponent,
    BarChartBasicComponent,
    LineChartBasicComponent,
    SearchBasicComponent,
    BreadscrumbBasicComponent,
    BottomsheetBasicComponent,
    TableNativeComponent,
    TableBasicComponent,
    ProgressSpinnerBasicComponent,
    SidenavBasicComponent,
    FeedbackIndicatorWarningComponent,
    FeedbackIndicatorBasicComponent,
    NodataBasicComponent,
    CardBasicComponent,
    PaginatorBasicComponent,
    FooterBasicComponent,
    HeaderBasicComponent,
    ChipPrimaryComponent,
    MenuNestedComponent,
    ButtonBasicComponent,
    DatePickerBasicComponent,
    CheckboxBasicComponent,
    MenuBasicComponent,
    RadioButtonBasicComponent,
    SliderBasicComponent,
    SlideToggleBasicComponent,
    IconBasicComponent,
    ChipBasicComponent,
    ProgressBarBasicComponent,
    HeaderFooterBasicComponent,
    LoginBasicComponent
  ],
  imports: [
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    VizHeaderModule,
    VizDateRangePickerModule,
    VizSelectModule,
    VizFooterModule,
    VizMenuModule,
    VizCheckboxModule,
    VizButtonModule,
    VizFormFieldModule,
    VizTreeModule,
    VizSliderModule,
    VizToolbarModule,
    VizIconModule,
    VizListModule,
    VizChipModule,
    VizBadgeModule,
    VizTabsModule,
    VizDialogModule,
    VizLoginModule,
    VizNodataModule,
    VizFeedbackIndicatorModule,
    VizSidenavModule,
    VizProgressSpinnerModule,
    VizTableModule,
    VizSteppersModule,
    VizBottomSheetModule,
    VizBreadcrumbModule,
    VizSearchModule,
    VizChartModule,
    CustomerSelectModule,
    CustomStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    VizLoginOktaModule,
    VizFileUploadModule
  ],
  providers: [],
  entryComponents: [
    SelectErrorStateMatcherComponent,
    SelectPanelClassComponent,
    SelectNoRippleComponent,
    SelectCustomTriggerComponent,
    SelectMultipleComponent,
    SelectOptgroupComponent,
    SelectResetComponent,
    SelectDisabledComponent,
    SelectHintErrorComponent,
    SelectFormComponent,
    SelectValueBindingComponent,
    SelectOverviewComponent,
    InputPrefixSuffixComponent,
    InputHintComponent,
    InputFormComponent,
    InputErrorsComponent,
    InputClearableComponent,
    TextFieldAutosizeTextareaComponent,
    InputErrorStateMatcherComponent,
    InputOverviewComponent,
    MyTelInput,
    FormFieldCustomControlComponent,
    FormFieldThemingComponent,
    FormFieldPrefixSuffixComponent,
    FormFieldErrorComponent,
    FormFieldHintComponent,
    FormFieldAppearanceComponent,
    FormFieldLabelComponent,
    FormFieldOverviewComponent,
    ExpansionStepsComponent,
    ExpansionOverviewComponent,
    GridListOverviewComponent,
    GridListDynamicComponent,
    ListSelectionComponent,
    ListOverviewComponent,
    ListSectionsComponent,
    TooltipAutoHideComponent,
    TooltipModifiedDefaultsComponent,
    TooltipMessageComponent,
    TooltipManualComponent,
    TooltipDisabledComponent,
    TooltipDelayComponent,
    TooltipCustomClassComponent,
    TooltipPositionComponent,
    TooltipOverviewComponent,
    DividerOverviewComponent,
    ExampleHeader,
    DatepickerDateClassComponent,
    DatepickerCustomHeaderComponent,
    DatepickerColorComponent,
    DatepickerViewsSelectionComponent,
    DatepickerCustomIconComponent,
    DatepickerFormatsComponent,
    DatepickerMomentComponent,
    DatepickerLocaleComponent,
    DatepickerApiComponent,
    DatepickerTouchComponent,
    DatepickerDisabledComponent,
    DatepickerEventsComponent,
    DatepickerFilterComponent,
    DatepickerMinMaxComponent,
    DatepickerValueComponent,
    DatepickerStartViewComponent,
    DatepickerOverviewComponent,
    TreeLoadmoreComponent,
    TreeNestedOverviewComponent,
    TreeChecklistComponent,
    TreeFlatOverviewComponent,
    TreeDynamicComponent,
    DialogContentExampleDialog,
    DialogDataExampleDialog,
    DialogOverviewExampleDialog,
    DialogContentComponent,
    DialogDataComponent,
    DialogOverviewComponent,
    PizzaPartyComponent,
    SnackBarOverviewComponent,
    SnackBarComponentComponent,
    TabGroupAnimationsComponent,
    TabGroupAlignComponent,
    TabNavBarBasicComponent,
    TabGroupAsyncComponent,
    TabGroupThemeComponent,
    TabGroupStretchedComponent,
    TabGroupLazyLoadedComponent,
    TabGroupHeaderBelowComponent,
    TabGroupDynamicComponent,
    TabGroupDynamicHeightComponent,
    TabGroupCustomLabelComponent,
    TabGroupBasicComponent,
    ButtonFloatingMiniComponent,
    ButtonFloatingComponent,
    ButtonIconComponent,
    ButtonFlatComponent,
    ButtonRaisedComponent,
    ChipStackedComponent,
    ChipWithInputComponent,
    ChipAutocompleteComponent,
    CheckboxConfigurableComponent,
    SlideToggleConfigurableComponent,
    RadioWidthNgmodelComponent,
    SliderConfigurableComponent,
    SliderFormattingComponent,
    PaginatorConfigurableComponent,
    SortTableComponent,
    SortOverviewComponent,
    AutocompleteOverviewComponent,
    AutocompleteOptgroupComponent,
    AutocompleteHighlightComponent,
    AutocompleteDisplayComponent,
    AutocompleteFilterComponent,
    AutocompleteSimpleComponent,
    CardFancyComponent,
    RippleOverviewComponent,
    BadgeButtonComponent,
    BadgeTextComponent,
    StepperErrorsComponent,
    StepperStatesComponent,
    StepperEditableComponent,
    StepperOptionalComponent,
    StepperLabelPositionBottomComponent,
    StepperVerticalComponent,
    StepperOverviewComponent,
    ButtontoggleSecondaryColorComponent,
    ButtontoggleTwoIconComponent,
    ButtontoggleThreeIconComponent,
    ButtontoggleTwoTextComponent,
    ButtontoggleDisableComponent,
    ButtontoggleThreeTextComponent,
    ButtontoggleBasicComponent,
    FileUploadBasicComponent,
    DialogContentComponent,
    DialogDataComponent,
    MenuIconComponent,
    DatePickerRangeValidationComponent,
    DatePickerEmulatingComponent,
    DatePickerFilterValidationComponent,
    DatePickerMinMaxValidationComponent,
    DatePickerSelectedValueComponent,
    DatePickerStartDateComponent,
    LoginOktaComponent,
    IconographyComponent,
    DatePickerSingleErrorComponent,
    CustomerSelectComponent,
    MonthPickerRangeComponent,
    MonthPickerSingleComponent,
    SliderRangeEventComponent,
    SliderEventComponent,
    DatePickerEventComponent,
    SliderRangeIconComponent,
    SliderRangeComponent,
    SliderContinueIconComponent,
    SliderContinueComponent,
    SliderBasicIconComponent,
    DatePickerSingleComponent,
    FeedbackIndicatorSuccessComponent,
    IconBigComponent,
    IconSmallComponent,
    ChipDisableComponent,
    ChipCloseComponent,
    BadgeIconComponent,
    ButtonDisableComponent,
    ButtonIconLeftComponent,
    ButtonIconRightComponent,
    ButtonTextComponent,
    ButtonStrokedComponent,
    HeaderApplicationComponent,
    SlideToggleDisableComponent,
    RadioButtonDisableComponent,
    CheckboxDisableComponent,
    CheckboxIndetermineComponent,
    BenchmarkChartBasicComponent,
    ComparativeChartBasicComponent,
    DotPlotChartBasicComponent,
    ProgressBarChartBasicComponent,
    ProgressBarBasicComponent,
    BarChartBasicComponent,
    LineChartBasicComponent,
    SearchBasicComponent,
    BreadscrumbBasicComponent,
    BottomsheetBasicComponent,
    TableNativeComponent,
    TableBasicComponent,
    ProgressSpinnerBasicComponent,
    SidenavBasicComponent,
    FeedbackIndicatorWarningComponent,
    FeedbackIndicatorBasicComponent,
    NodataBasicComponent,
    CardBasicComponent,
    PaginatorBasicComponent,
    FooterBasicComponent,
    HeaderBasicComponent,
    ChipPrimaryComponent,
    MenuNestedComponent,
    ButtonBasicComponent,
    DatePickerBasicComponent,
    CheckboxBasicComponent,
    MenuBasicComponent,
    RadioButtonBasicComponent,
    SliderBasicComponent,
    SlideToggleBasicComponent,
    IconBasicComponent,
    ChipBasicComponent,
    ProgressBarBasicComponent,
    HeaderFooterBasicComponent,
    LoginBasicComponent
  ]
})
export class ExampleModule {}
