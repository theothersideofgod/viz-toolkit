import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'line-chart-basic',
  templateUrl: 'line-chart-basic.component.html',
  styleUrls: ['line-chart-basic.component.css']
})
export class LineChartBasicComponent implements OnInit {
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
    title: {
      text: 'Line Chart Label'
    },

    // subtitle: {
    //   text: 'Source: thesolarfoundation.com'
    // },

    yAxis: {
      title: {
        text: 'Y-Axis label'
      }
    },
    xAxis: {
      title: {
        text: 'X-Axis label'
      },
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
      ]
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        }
      }
    },

    series: [
      {
        name: 'value1',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      },
      {
        name: 'valu2',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
      },
      {
        name: 'value3',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
      }
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }
      ]
    }
  };
  ngOnInit() {}
}

export const LineChartBasicData = {
  name: 'LineChartBasic'
};
