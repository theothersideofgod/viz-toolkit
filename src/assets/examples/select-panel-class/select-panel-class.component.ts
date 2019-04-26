import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';

/**
 * @title Select with custom panel styling
 */
@Component({
  selector: 'select-panel-class',
  templateUrl: 'select-panel-class.component.html',
  styleUrls: ['select-panel-class.component.css'],
  // Encapsulation has to be disabled in order for the
  // component style to apply to the select panel.
  encapsulation: ViewEncapsulation.None,
})
export class SelectPanelClassComponent {
  panelColor = new FormControl('red');
}
