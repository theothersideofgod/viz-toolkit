import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

/** @title Sidenav with custom escape and backdrop click behavior */
@Component({
  selector: 'sidenav-disable-close',
  templateUrl: 'sidenav-disable-close.component.html',
  styleUrls: ['sidenav-disable-close.component.css'],
})
export class SidenavDisableCloseComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

}
