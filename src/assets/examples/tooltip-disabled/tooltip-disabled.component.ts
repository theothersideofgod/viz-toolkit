import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

/**
 * @title Tooltip that can be disabled
 */
@Component({
  selector: 'tooltip-disabled',
  templateUrl: 'tooltip-disabled.component.html',
  styleUrls: ['tooltip-disabled.component.css'],
})
export class TooltipDisabledComponent {
  disabled = new FormControl(false);
}
