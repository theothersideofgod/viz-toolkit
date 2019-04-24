import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

/**
 * @title Tooltip with a show and hide delay
 */
@Component({
  selector: 'tooltip-delay',
  templateUrl: 'tooltip-delay.component.html',
  styleUrls: ['tooltip-delay.component.css'],
})
export class TooltipDelayComponent {
  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);
}
