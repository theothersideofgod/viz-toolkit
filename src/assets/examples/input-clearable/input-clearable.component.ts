import {Component} from '@angular/core';

/**
 * @title Input with a clear button
 */
@Component({
  selector: 'input-clearable',
 templateUrl: 'input-clearable.component.html',
 styleUrls: ['input-clearable.component.css'],
})
export class InputClearableComponent {
  value = 'Clear me';
}
