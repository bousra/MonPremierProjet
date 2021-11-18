import { Component, OnInit } from '@angular/core';

import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.css']
})
export class HighchartsComponent  {
  selectedItems= ['Pape nadiye', 'Ibrahima Bah', 'Demba', 'Moussa'];
   chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: ''
      },
     credits:{
        enabled: false,
     },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

      },
      series: [{
        type: 'line',
        name: '',
        data: [7, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9]
      }]
    });
   clients= ['Pape Moussa Dieng','Ibrahima'];
   SecteurActivites=[['Secteur 1','#660066',10],
     ['Secteur 2','#660066',10],['Secteur 3','#660066',10],['Secteur 4','#660066',10],
     ['Secteur 5','#d4af37',10],['Secteur 6','#d4af37',10]];
  }
