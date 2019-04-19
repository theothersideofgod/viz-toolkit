import {Component} from '@angular/core';

/**
 * @title Tab group where the tab content is loaded lazily (when activated)
 */
@Component({
  selector: 'tab-group-lazy-loaded',
  templateUrl: 'tab-group-lazy-loaded.component.html',
  styleUrls: ['tab-group-lazy-loaded.component.css'],
})
export class TabGroupLazyLoadedComponent {
  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }
}
