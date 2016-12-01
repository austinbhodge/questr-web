import { Component, Input } from '@angular/core';


@Component({
  selector: 'vb-map',
  templateUrl: './vbMap.component.html',
  styleUrls: ['./vbMap.component.css']
})

export class VbMap {
  @Input() mapMarkers;
  lat: number = 36.736;
  lng: number = -76.164;
  zoom: number = 11;
}
