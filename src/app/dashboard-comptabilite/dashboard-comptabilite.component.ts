import {Component, OnInit} from '@angular/core';
import {ChartModule} from 'angular-highcharts';

import {Chart} from 'angular-highcharts';

@Component({
  selector: 'app-dashboard-comptabilite',
  templateUrl: './dashboard-comptabilite.component.html',
  styleUrls: ['./dashboard-comptabilite.component.css']
})
export class DashboardComptabiliteComponent implements OnInit {

  clientsNameChiffer: { name: string, montant: number }[] = [
    {name: 'senecartours', montant: 13000000},
    {name: 'cgf bourse', montant: 13000000},
    {name: 'hertz', montant: 13000000}
  ];
  revenuMonth = 7;
  croissancePourcentage = 60;
  pourcentage = this.croissancePourcentage.toString();
  croissancePourcentageReste = 100 - this.croissancePourcentage;

  chart = new Chart({
    chart: {
      type: 'pie',
      height: 80,
      width: 75
    },
    credits: {
      enabled: false
    },
    title: {
      align: 'center',
      floating: false,
      margin: 15,
      style: {color: '#e43c0a', fontSize: '13px'},
      text: this.pourcentage + '%',
      useHTML: true,
      verticalAlign: 'middle',
      widthAdjust: -44,
      x: 0,
      y: 10,
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      enabled: false
    },

    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'undefined',
        dataLabels: {
          enabled: false,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      name: 'Brands',
      innerSize: '90%',
      type: 'pie',
      colorByPoint: true,
      enableMouseTracking: false,
      states: {
        hover: {
          enabled: false
        }
      },
      data: [{
        name: 'Chrome',
        y: this.croissancePourcentage,
        sliced: false,
        selected: false,
        color: '#e46e0a'
      }, {
        name: 'Internet Explorer',
        y: this.croissancePourcentageReste,
        color: '#a6a6a6'
      }]
    }]
  });
  char2 = new Chart({
    chart: {
      type: 'column',
      height: 200,
      width: 200
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    accessibility: {
      announceNewData: {
        enabled: true
      }
    },
    xAxis: {
      categories: ['j', 'f', 'm', 'a', 'm', 'j', 'j'],
      lineColor: '#fff'
    },
    yAxis: {
      title: {
        text: ''
      },
      visible: false

    },
    legend: {
      enabled: false
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        cursor: 'undefined',
        dataLabels: {
          enabled: false
        }
      }
    },

    tooltip: {
      enabled: false
    },

    series: [{
      name: 'resteRevenus',
      type: 'column',
      color: '#C4E1FF',
      data: [2, 3, 4, 7, 2]
    }, {
      name: 'revenus',
      type: 'column',
      color: '#38679b',
      data: [10, 2, 3, 2, 1]
    }]
  });
  char3 = new Chart({
    chart: {
      type: 'line',
      height: 150,
      width: 250
    },
    credits: {
      enabled: false
    },
    title: {
      text: undefined
    },
    yAxis: {
      gridLineDashStyle: 'LongDash',
      title: {
        text: undefined
      }
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: false
        },
        enableMouseTracking: false
      }
    },
    series: [{
      showInLegend: false,
      type: 'line',
      data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5]
    }]
  });
  //
  /*
  * */
  char4 = new Chart({
    chart: {
      type: 'line',
      height: 150,
      width: 250
    },
    credits: {
      enabled: false
    },
    title: {
      text: undefined
    },
    yAxis: {
      gridLineDashStyle: 'LongDash',
      title: {
        text: undefined
      }
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: false
        },
        enableMouseTracking: false
      }
    },
    series: [{
      showInLegend: false,
      type: 'line',
      data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5]
    }]
  });
  charFive = new Chart({
    chart: {
      type: 'column',
      height: 200,
      width: 200
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    accessibility: {
      announceNewData: {
        enabled: true
      }
    },
    xAxis: {
      categories: ['j', 'f', 'm', 'a', 'm', 'j', 'j'],
      lineColor: '#fff'
    },
    yAxis: {
      title: {
        text: ''
      },
      visible: false

    },
    legend: {
      enabled: false
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        cursor: 'undefined',
        dataLabels: {
          enabled: false
        }
      }
    },

    tooltip: {
      enabled: false
    },

    series: [{
      name: 'resteRevenus',
      type: 'column',
      color: '#C4E1FF',
      data: [2, 3, 4, 7, 2]
    }, {
      name: 'revenus',
      type: 'column',
      color: '#38679b',
      data: [10, 2, 3, 2, 1]
    }]
  });
  constructor() {
  }

  ngOnInit(): void {
  }

}
