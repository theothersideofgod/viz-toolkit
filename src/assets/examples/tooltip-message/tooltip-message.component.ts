import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

/**
 * @title Tooltip with a changing message
 */
@Component({
  selector: 'tooltip-message',
  templateUrl: 'tooltip-message.component.html',
  styleUrls: ['tooltip-message.component.css'],
})
export class TooltipMessageComponent {
  message = new FormControl('Info about the action');
}
