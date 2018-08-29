import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'bar-chart-basic',
  templateUrl: 'bar-chart-basic.component.html',
  styleUrls: ['bar-chart-basic.component.css']
})
export class BarChartBasicComponent implements OnInit {
  chartOption = {
    chart: {
      type: 'column'
    },
    colors: [
      '#9966FF',
      '#00CC99',
      '#FF9933',
      '#3399FF',
      '#99CC33',
      '#FF6699',
      '#FFFF33',
      '#FF3333'
    ],
    title: {
      text: 'Bar Chart'
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
        'value1',
        'value2',
        'value3',
        'value4',
        'value5',
        'value6',
        'value7',
        'value8'
      ]
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      enabled: false
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
        data: [46.3, 34.0, 20.4, 8.8, 42.2, 18.8, 33.5, 15.2]
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

export const BarChartBasicData = {
  name: 'BarChartBasic'
};
