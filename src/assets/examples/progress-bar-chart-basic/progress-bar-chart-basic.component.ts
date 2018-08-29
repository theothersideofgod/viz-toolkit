import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'progress-bar-chart-basic',
  templateUrl: 'progress-bar-chart-basic.component.html',
  styleUrls: ['progress-bar-chart-basic.component.css']
})
export class ProgressBarChartBasicComponent implements OnInit {
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
      type: 'bar'
    },
    title: {
      text: 'Progress Chart'
    },
    xAxis: {
      categories: ['Overall', 'Three', 'Two', 'One ', '4']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'X-Axis % Label'
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [
      {
        name: 'Completed',
        data: [5, 3, 4, 7, 2]
      },
      {
        name: 'In Progress',
        data: [2, 2, 3, 2, 1]
      },
      {
        name: 'Not Started',
        data: [3, 4, 4, 2, 5]
      }
    ]
  };
  ngOnInit() {}
}

export const ProgressBarChartBasicData = {
  name: 'ProgressBarChartBasic'
};
