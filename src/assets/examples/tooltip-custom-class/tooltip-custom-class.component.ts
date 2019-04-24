import {Component, ViewEncapsulation} from '@angular/core';

/**
 * @title Tooltip that can have a custom class applied.
 */
@Component({
  selector: 'tooltip-custom-class',
  templateUrl: 'tooltip-custom-class.component.html',
  styleUrls: ['tooltip-custom-class.component.css'],
  // Need to remove view encapsulation so that the custom tooltip style defined in
  // `tooltip-custom-class-example.css` will not be scoped to this component's view.
  encapsulation: ViewEncapsulation.None,
})
export class TooltipCustomClassComponent {}
