import {Component} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'grid-list-dynamic',
  templateUrl: 'grid-list-dynamic.component.html',
  styleUrls: ['grid-list-dynamic.component.css'],
})
export class GridListDynamicComponent {
  tiles: Tile[] = [
    {text: '1', cols: 3, rows: 1, color: '#E9E9E9'},
    {text: '2', cols: 1, rows: 2, color: '#E9E9E9'},
    {text: '3', cols: 1, rows: 1, color: '#E9E9E9'},
    {text: '4', cols: 2, rows: 1, color: '#E9E9E9'},
  ];
}
