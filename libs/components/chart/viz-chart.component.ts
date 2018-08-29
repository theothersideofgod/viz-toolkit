import {
  Component,
  OnInit,
  ContentChild,
  ViewChild,
  ElementRef,
  OnDestroy,
  OnChanges
} from '@angular/core';
import { Input, AfterViewInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'viz-chart',
  templateUrl: './viz-chart.component.html',
  styleUrls: ['./viz-chart.component.scss']
})
export class VizChartComponent
  implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  @Input()
  height;
  @Input()
  width;
  @Input()
  chartOption;
  @ViewChild('chart')
  chart: ElementRef;
  _highchartInstance;
  constructor() {}

  ngOnInit() {}

  renderChart() {
    this._highchartInstance && this._highchartInstance.destroy();
    this._highchartInstance = Highcharts.chart(
      this.chart.nativeElement,
      this.chartOption
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.renderChart();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this._highchartInstance.destroy();
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.renderChart();
  }
}
