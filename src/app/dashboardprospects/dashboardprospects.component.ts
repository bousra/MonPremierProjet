import { Component, OnInit } from '@angular/core';
import {Chart} from 'angular-highcharts';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import * as mapboxgl from 'mapbox-gl';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
/*
  *les modules utilises pour le calendrier sont: @fullcalendar/angular
  *  @fullcalendar/interaction
  *  @fullcalendar/daygrid
  * npm i  @fullcalendar/angular --legacy-peer-deps
  * npm i  @fullcalendar/daygrid --legacy-peer-deps
  * npm i  @fullcalendar/interaction --legacy-peer-deps
  * les modules utilises pour la carte : mapbox-gl
  * npm i mapbox-gl
 */
@Component({
  selector: 'app-dashboardprospects',
  templateUrl: './dashboardprospects.component.html',
  styleUrls: ['./dashboardprospects.component.css']
})
export class DashboardprospectsComponent implements OnInit {
  constructor() {
  }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    eventMinHeight: 0,
    headerToolbar: {
      start: 'prev', // will normally be on the left. if RTL, will be on the right
      center: 'title,today',
      end: 'next' // will normally be on the right. if RTL, will be on the left
    },
    buttonText: {
      today: 'Aujourd\'hui'
    }
  };
  map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/streets-v11';
  char = new Chart({
    chart: {
      type: 'line',
      height: '35%'
    },
    title: undefined,
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: undefined
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: false
        },
        // enableMouseTracking: false
      }
    },
    series: [{
      showInLegend: false,
      name: 'Tokyo',
      type: 'line',
      color: '#2295c7',
      data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
      showInLegend: false,
      name: 'London',
      type: 'line',
      color: '#38679b',
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
  });
  secteurActivites: { name: string, montant: number }[] = [
    {name: 'secteur 1', montant: 8},
    {name: 'secteur 2', montant: 10},
    {name: 'secteur 3', montant: 6},
    {name: 'secteur 4', montant: 2},
    {name: 'secteur 5', montant: 4},
    {name: 'secteur 6', montant: 5},
  ];
  demandes = [
    {numeroDemande: '000123', nomClient: 'CGF Bourse',  date: '05 Aout - 12:21'},
    {numeroDemande: '000124', nomClient: 'HERTZ',  date: '05 Aout - 12:21'},
    {numeroDemande: '000125', nomClient: 'SENECARTOURS',  date: '05 Aout - 09:22'},
    {numeroDemande: '000126', nomClient: 'HERTZ',  date: '05 Aout - 10:47'},
  ];
  charPie = new Chart({
    chart: {
      plotBackgroundColor: undefined,
      plotBorderWidth: undefined,
      plotShadow: false,
      width: 300,
      height: '80%',
      type: 'pie'
    },
    credits: {
      enabled: false
    },
    title: {
      text: undefined
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: false,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
          distance: -50,
          filter: {
            property: 'percentage',
            operator: '>',
            value: 4
          }
        },
        // enableMouseTracking: false
      }
    },
    series: [{
      name: 'Share',
      type: 'pie',
      data: [
        { name: 'secteur 1', y: 61.41 },
        { name: 'secteur 2', y: 11.84 },
        { name: 'secteur 3', y: 10.85 },
        { name: 'seuteur 4', y: 4.67 },
        { name: 'secteur 5', y: 4.18 },
        { name: 'secteur 6', y: 7.05 }
      ]
    }]
  });
  chartClientsBySector = new Chart({
    chart: {
      type: 'column',
      height: '20%'
    },
    credits: {
      enabled: false
    },
    title: {
      text: undefined
    },
    xAxis: {
      categories: ['L', 'M', 'M', 'J', 'V']
    },
    yAxis: {
      visible: false,
      min: 0,
      title: {
        text: undefined
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      shared: true
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        enableMouseTracking: false
      },
    },
    series: [{
      name: 'secteur 1',
      type: 'column',
      showInLegend: false,
      data: [5, 3, 4, 7, 2]
    }, {
      name: 'secteur 2',
      showInLegend: false,
      type: 'column',
      data: [2, 2, 3, 2, 1]
    }, {
      name: 'secteur 3',
      showInLegend: false,
      type: 'column',
      data: [3, 4, 4, 2, 5]
    }]
  });

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(position =>{
        const coordonnees = position.coords;
// @ts-ignore
        mapboxgl.accessToken = 'pk.eyJ1IjoiYm91c3JhIiwiYSI6ImNrdzF4em1pYmJrdjcydXF3ODd2YXFvZDkifQ.9-gmxEq3wtgDDMnx0VCgXw';
        this.map = new mapboxgl.Map({
          container: 'map',
          style: this.style,
          zoom: 13,
          center: [coordonnees.longitude, coordonnees.latitude]
        });
        // Add map controls
        this.map.addControl(new mapboxgl.NavigationControl());
      }

    );
  }
  // tslint:disable-next-line:typedef
  onButtonGroupClick($event: { target: any; srcElement: any; }){
    const clickedElement = $event.target || $event.srcElement;

    if ( clickedElement.nodeName === 'BUTTON' ) {
      const isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector('.active');
      // if a Button already has Class: .active
      if ( isCertainButtonAlreadyActive ) {
        isCertainButtonAlreadyActive.classList.remove('active');
      }
      clickedElement.className += ' active';
    }
  }
  // tslint:disable-next-line:typedef
  onButtonGroupClickclientsBySector($event: { target: any; srcElement: any; }){
    const clickedElement = $event.target || $event.srcElement;

    if ( clickedElement.nodeName === 'BUTTON' ) {
      const isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector('.active-clientsBySector');
      // if a Button already has Class: .active
      if ( isCertainButtonAlreadyActive ) {
        isCertainButtonAlreadyActive.classList.remove('active-clientsBySector');
      }
      clickedElement.className += ' active-clientsBySector';
    }
  }
}
