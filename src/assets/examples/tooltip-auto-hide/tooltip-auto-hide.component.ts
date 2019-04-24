import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material';

/**
 * @title Tooltip that demonstrates auto-hiding when it clips out of its scrolling container.
 */
@Component({
  selector: 'tooltip-auto-hide',
  templateUrl: 'tooltip-auto-hide.component.html',
  styleUrls: ['tooltip-auto-hide.component.css'],
})
export class TooltipAutoHideComponent {
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
}
