import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'expansion-panel-angular',
  templateUrl: 'expansion-panel-angular.component.html',
  styleUrls: ['expansion-panel-angular.component.css'],
})
export class ExpansionPanelAngularComponent implements OnInit {
  panelOpenState = false;
  ngOnInit() { }
}

export const ExpansionPanelAngularData = {
	name: 'ExpansionPanelAngular'
}