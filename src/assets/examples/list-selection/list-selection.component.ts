import {Component} from '@angular/core';

/**
 * @title List with selection
 */
@Component({
  selector: 'list-selection',
  styleUrls: ['list-selection.component.css'],
  templateUrl: 'list-selection.component.html',
})
export class ListSelectionComponent {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins'];
}
