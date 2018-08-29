import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'benchmark-chart-basic',
  templateUrl: 'benchmark-chart-basic.component.html',
  styleUrls: ['benchmark-chart-basic.component.css']
})
export class BenchmarkChartBasicComponent implements OnInit {
  chartOption = {
    colors: [
      '#00CC99',
      '#9966FF',
      '#FF9933',
      '#3399FF',
      '#99CC33',
      '#FF6699',
      '#FFFF33',
      '#FF3333'
    ],
    chart: {
      type: 'column'
    },
    title: {
      text: 'Benchmark Chart'
    },
    // subtitle: {
    //   text: 'Source: WorldClimate.com'
    // },
    xAxis: {
      categories: ['Q1', 'Q2', 'Q3', 'Q4', ''],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'values'
      },
      plotLines: [
        {
          value: 75,
          color: 'black',
          dashStyle: 'solid',
          width: 2
        }
      ]
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [
      {
        name: 'Marketing',
        data: [49.9, 71.5, 106.4, 129.2, 144.0]
      },
      {
        name: 'Research',
        data: [83.6, 78.8, 98.5, 93.4, 106.0]
      },
      {
        name: 'support',
        data: [48.9, 38.8, 39.3, 41.4, 47.0]
      }
    ]
  };
  ngOnInit() {}
}

export const BenchmarkChartBasicData = {
  name: 'BenchmarkChartBasic'
};
