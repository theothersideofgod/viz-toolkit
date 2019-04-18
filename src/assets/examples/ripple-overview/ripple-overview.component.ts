import {Component} from '@angular/core';

/**
 * @title MatRipple basic usage
 */
@Component({
  selector: 'ripple-overview',
  templateUrl: 'ripple-overview.component.html',
  styleUrls: ['ripple-overview.component.css'],
})
export class RippleOverviewComponent {
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
}
