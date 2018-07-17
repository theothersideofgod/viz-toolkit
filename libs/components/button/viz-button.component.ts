import { Component, OnInit, Input } from '@angular/core';

export type VizButtonType = 'primary' | 'stroked' | 'default';

@Component({
	selector: 'viz-button',
	templateUrl: 'viz-button.component.html',
	styleUrls: ['viz-button.component.scss']
})

export class VizButtonComponent implements OnInit {

	@Input() type: VizButtonType;
	ngOnInit() { }
}