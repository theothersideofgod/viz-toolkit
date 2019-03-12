import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tabs-nav-bar',
  templateUrl: 'tabs-nav-bar.component.html',
  styleUrls: ['tabs-nav-bar.component.scss']
})
export class TabsNavBarComponent implements OnInit {
  links = ['Summary', 'Warning', 'Passed'];
  activeLink = this.links[0];
  background = '';
  ngOnInit() {}
  toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }
}

export const TabsNavBarData = {
  name: 'TabsNavBar'
};
