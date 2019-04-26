import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

/** @title Fixed sidenav */
@Component({
  selector: 'sidenav-fixed',
  templateUrl: 'sidenav-fixed.component.html',
  styleUrls: ['sidenav-fixed.component.css']
})
export class SidenavFixedComponent {
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }
}
