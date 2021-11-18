import { Component, OnInit } from '@angular/core';

declare const L: any;
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  title = 'LocationMap';
  constructor() { }

  ngOnInit(): void {
    if (!navigator.geolocation){
      console.log('localisation non supportee');
    }
    navigator.geolocation.getCurrentPosition(position =>{
      const coordonnes = position.coords;
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      const mymap = L.map('map').setView([coordonnes.latitude, coordonnes.longitude], 13);
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYm91c3JhIiwiYSI6ImNrdzF5ZWdsdzIyczgydnBoZHVrMXp3NzQifQ.7npXkvg8AeCubZSFyzi5BA', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
      }).addTo(mymap);
      const marker = L.marker([coordonnes.latitude, coordonnes.longitude]).addTo(mymap);
      marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
      const popup = L.popup()
        .setLatLng([coordonnes.latitude, coordonnes.longitude])
        .setContent('I am a standalone popup.')
        .openOn(mymap);
    });
    this.watchPosition();
  }
  // tslint:disable-next-line:typedef
  watchPosition(){
    const desLat = 0;
    const desLon= 0;
    const id = navigator.geolocation.watchPosition((position) => {
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      if(position.coords.latitude === desLat){
          navigator.geolocation.clearWatch(id);
      }
    }, (err) => {
      console.log(err);
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
      }
      );
  }

}
