import {Component} from '@angular/core';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-overview',
  templateUrl: 'expansion-overview.component.html',
  styleUrls: ['expansion-overview.component.css'],
})
export class ExpansionOverviewComponent {
  panelOpenState = false;
}
