import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'viz-footer',
	templateUrl: './viz-footer.component.html',
	styleUrls: ['./viz-footer.component.scss']
})

export class VizFooterComponent implements OnInit {

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