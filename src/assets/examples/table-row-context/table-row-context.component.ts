import {Component} from '@angular/core';

/**
 * @title Table showing each row context properties.
 */
@Component({
  selector: 'table-row-context',
  styleUrls: ['table-row-context.component.css'],
  templateUrl: 'table-row-context.component.html',
})
export class TableRowContextComponent {
  displayedColumns: string[] = ['$implicit', 'index', 'count', 'first', 'last', 'even', 'odd'];
  data: string[] = ['one', 'two', 'three', 'four', 'five'];
}
