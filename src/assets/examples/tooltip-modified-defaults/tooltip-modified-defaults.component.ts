import {Component} from '@angular/core';
import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from '@angular/material';

/** Custom options the configure the tooltip's default show/hide delays. */
export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 1000,
  hideDelay: 1000,
  touchendHideDelay: 1000,
};

/**
 * @title Tooltip with a show and hide delay
 */
@Component({
  selector: 'tooltip-modified-defaults',
  templateUrl: 'tooltip-modified-defaults.component.html',
  styleUrls: ['tooltip-modified-defaults.component.css'],
  providers: [
    {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}
  ],
})
export class TooltipModifiedDefaultsComponent {}
