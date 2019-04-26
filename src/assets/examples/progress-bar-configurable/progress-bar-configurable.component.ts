import {Component} from '@angular/core';

/**
 * @title Configurable progress-bar
 */
@Component({
  selector: 'progress-bar-configurable',
  templateUrl: 'progress-bar-configurable.component.html',
  styleUrls: ['progress-bar-configurable.component.css'],
})
export class ProgressBarConfigurableComponent {
  color = 'accent';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;
}
