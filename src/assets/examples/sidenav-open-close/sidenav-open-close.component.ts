import {Component} from '@angular/core';

/** @title Sidenav open & close behavior */
@Component({
  selector: 'sidenav-open-close',
  templateUrl: 'sidenav-open-close.component.html',
  styleUrls: ['sidenav-open-close.component.css'],
})
export class SidenavOpenCloseComponent {
  events: string[] = [];
  opened: boolean = true;
}
