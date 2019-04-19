import {Component} from '@angular/core';

/**
 * @title Basic use of the tab nav bar
 */
@Component({
  selector: 'tab-nav-bar-basic',
  templateUrl: 'tab-nav-bar-basic.component.html',
  styleUrls: ['tab-nav-bar-basic.component.css'],
})
export class TabNavBarBasicComponent {
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background = '';

  toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }
}
