import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comparative-chart-basic',
  templateUrl: 'comparative-chart-basic.component.html',
  styleUrls: ['comparative-chart-basic.component.css']
})
export class ComparativeChartBasicComponent implements OnInit {
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
      text: 'Comparative Chart'
    },
    // subtitle: {
    //   text: 'Source: WorldClimate.com'
    // },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      // crosshair: true,
      text: 'X-Axis Label'
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Y-Axis Label'
      }
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
        name: 'value1',
        data: [
          49.9,
          71.5,
          106.4,
          129.2,
          144.0,
          176.0,
          135.6,
          148.5,
          216.4,
          194.1,
          95.6,
          54.4
        ]
      },
      {
        name: 'value2',
        data: [
          83.6,
          78.8,
          98.5,
          93.4,
          106.0,
          84.5,
          105.0,
          104.3,
          91.2,
          83.5,
          106.6,
          92.3
        ]
      }
    ]
  };
  ngOnInit() {}
}

export const ComparativeChartBasicData = {
  name: 'ComparativeChartBasic'
};
