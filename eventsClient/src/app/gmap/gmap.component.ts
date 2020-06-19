import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MapInfoWindow, MapMarker, GoogleMap} from '@angular/google-maps';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})
export class GmapComponent implements OnInit {
  @ViewChild(GoogleMap, {static: false}) map: GoogleMap;
  @ViewChild(MapInfoWindow, {static: false}) info: MapInfoWindow;
  @Output() centerPosition = new EventEmitter();
  @Input() pickedPosition: string;
  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    maxZoom: 15,
    minZoom: 8,
  };
  markers = [];
  infoContent = '';
  testCenter: google.maps.LatLngLiteral;

  ngOnInit() {
    if (this.pickedPosition !== undefined) {
      this.center = JSON.parse(this.pickedPosition);
    }

    // @ts-ignore
    if (this.center === undefined) {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    }
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) {
      this.zoom++;
    }
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) {
      this.zoom--;
    }
  }

  click(event: google.maps.MouseEvent) {
    console.log(event);
  }

  logCenter() {
    this.centerPosition.emit(JSON.stringify(this.map.getCenter().toJSON()));
    this.testCenter = this.map.getCenter().toJSON();
  }

  addMarker() {
    this.markers.push({
      position: {
        lat: this.map.getCenter().lat(),
        lng: this.map.getCenter().lng(),
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.BOUNCE,
      },
    });
  }

  openInfo(marker: MapMarker, content) {
    this.infoContent = content;
    this.info.open(marker);
  }
}
