import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'viz-footer',
  templateUrl: './viz-footer.component.html',
  styleUrls: ['./viz-footer.component.scss']
})
export class VizFooterComponent implements OnInit {
  year = new Date().getFullYear()
  @Input('title')
  title;
  @Input()
  brands = [];
  @Input()
  leftBrands = [];
  @Input()
  rightBrands = [];
  ngOnInit() {
    this.splitBrands();
  }
  splitBrands() {
    const count = this.brands.length;
    if (count) {
      if (count % 2 === 0) {
        const leftCount = count / 2;
        this.leftBrands = this.brands.slice(0, leftCount);
        this.rightBrands = this.brands.slice(leftCount, count);
      } else {
        const leftCount = (count - 1) / 2;
        this.leftBrands = this.brands.slice(0, leftCount);
        this.rightBrands = this.brands.slice(leftCount, count);
      }
    }
  }
  isBrands() {
    return this.brands.length > 0 || this.leftBrands.length > 0 || this.rightBrands.length > 0 ;
  }
}
