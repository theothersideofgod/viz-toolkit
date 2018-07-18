import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'viz-expansion-pannel',
	templateUrl: './viz-expansion-pannel.component.html',
	styleUrls: ['./viz-expansion-pannel.component.scss']
})

export class Vizexpansion-pannelComponent implements OnInit {

	ngOnInit() { 
		this.splitBrands()
	}

	@Input() brands:Array<BrandType> = []
	leftBrands: Array<BrandType> = []
	rightBrands: Array<BrandType> = []

	splitBrands() {
	  let count = this.brands.length
    if (count) {
			if ( count % 2 == 0 ) {
				let leftCount = count / 2
				this.leftBrands = this.brands.slice(0, leftCount)
				this.rightBrands = this.brands.slice(leftCount, count)
			} else {
				let leftCount = (count - 1) / 2 
				this.leftBrands = this.brands.slice(0, leftCount)
				this.rightBrands = this.brands.slice(leftCount, count)
			}
	  }
	}
}

export interface BrandType {
	id: string;
	link: string;
	title: string;
}