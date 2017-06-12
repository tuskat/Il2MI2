import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number = 22.293101;
  lng: number = 114.173543;
  polylines: any[] = [];
  markers: any[] = [];
  constructor() { }

  ngOnInit() {
  }
  /* 
 Remove Markers and Polylines (For testing sake, only one result is shown at the time instead of stacking them)
   */
  flushData() {
    this.polylines = [];
    this.markers = [];
  }
  /* 
Use Api call result to create Marker and Polylines
 */

  insertLine(polyline: any, origin: string, destination: string) {
    this.flushData();
    this.polylines.push(polyline);

    let start = polyline[0];
    start.label = "Origin : " + origin;

    let end = polyline[polyline.length - 1];
    end.label = "Destination : " + destination;
    this.markers.push(start);
    this.markers.push(end);
  }
  /* 
 Return a number
  */
  toCoordinate(point: any) {
    let coordinate = +point;
    return coordinate;
  }
}
