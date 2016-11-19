import { Component } from '@angular/core';


@Component({
  selector: 'questr-map',
  templateUrl: './questMap.component.html',
  styleUrls: ['./questMap.component.css']
})

export class QuestMap {
  lat: number = 36.826;
  lng: number = -76.164;
  zoom: number = 14;
}
