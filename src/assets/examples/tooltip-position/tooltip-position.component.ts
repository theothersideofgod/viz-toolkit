import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material';

/**
 * @title Tooltip with a custom position
 */
@Component({
  selector: 'tooltip-position',
  templateUrl: 'tooltip-position.component.html',
  styleUrls: ['tooltip-position.component.css'],
})
export class TooltipPositionComponent {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
}
