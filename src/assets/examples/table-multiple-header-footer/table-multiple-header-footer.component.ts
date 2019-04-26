import {Component} from '@angular/core';
import {Transaction} from '../table-footer-row/table-footer-row.component';

export interface Transaction {
  item: string;
  cost: number;
}

/**
 * @title Table with multiple header and footer rows
 */
@Component({
  selector: 'table-multiple-header-footer',
  styleUrls: ['table-multiple-header-footer.component.css'],
  templateUrl: 'table-multiple-header-footer.component.html',
})
export class TableMultipleHeaderFooterComponent {
  displayedColumns: string[] = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
}
