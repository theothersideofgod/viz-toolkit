import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'viz-range-slider',
  templateUrl: './viz-range-slider.component.html',
  styleUrls: ['./viz-range-slider.component.scss']
})
export class VizRangeSliderComponent implements OnInit {
  _lowerValue: number;

  _upperValue: number;

  _upperWidth: string;

  @Output()
  change: EventEmitter<[number, number]> = new EventEmitter<[number, number]>();

  @Input('min')
  min: number;

  @Input('max')
  max: number;

  @Input('lowerValue')
  lowerValue: number;

  @Input('upperValue')
  upperValue: number;

  @Input('step')
  step: number;

  @Input('minGap')
  minGap = 0;

  @Input('thumbLabel')
  thumbLabel: boolean;

  constructor() {}

  ngOnInit() {
    this.updateWidth();
  }

  getRightWidth() {
    return (this._upperWidth =
      ((this.max - (this.lowerValue + this.step)) / (this.max - this.min)) *
        100 +
      '%');
  }

  getRightValue() {
    return this.lowerValue + this.minGap;
  }

  updateWidth() {
    // console.log(this.lowerValue + this.step, this.upperValue)

    // if(this.lowerValue >= (this.upperValue - this.step)) {
    //   this.upperValue = this.lowerValue + this.step
    // }

    // if(this.upperValue <= (this.lowerValue + this.step)) {
    //   this.lowerValue = this.upperValue - this.step
    // }

    this._upperWidth =
      ((this.max - this.lowerValue) / (this.max - this.min)) * 100 + '%';
  }

  lowerValueChange(event: any) {
    this.lowerValue = event.value;
    if (this.lowerValue >= this.upperValue - this.step) {
      this.upperValue = this.lowerValue + this.step;
    }
    this.updateWidth();
    this.change.emit([this.lowerValue, this.upperValue]);
  }
  upperValueChange(event: any) {
    this.upperValue = event.value;
    this.change.emit([this.lowerValue, this.upperValue]);

    // if(this.upperValue <= (this.lowerValue + this.step)) {
    //   this.lowerValue = this.upperValue - this.step
    // }
    // this.updateWidth()
  }
}
