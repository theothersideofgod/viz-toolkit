import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

/** @title Sidenav with configurable mode */
@Component({
  selector: 'sidenav-mode',
  templateUrl: 'sidenav-mode.component.html',
  styleUrls: ['sidenav-mode.component.css']
})
export class SidenavModeComponent {
  mode = new FormControl('over');
}
