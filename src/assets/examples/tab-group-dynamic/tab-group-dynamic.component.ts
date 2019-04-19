import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

/**
 * @title Tab group with dynamically changing tabs
 */
@Component({
  selector: 'tab-group-dynamic',
  templateUrl: 'tab-group-dynamic.component.html',
  styleUrls: ['tab-group-dynamic.component.css'],
})
export class TabGroupDynamicComponent {
  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}
