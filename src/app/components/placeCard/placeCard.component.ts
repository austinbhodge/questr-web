import { Component, Input } from '@angular/core';


@Component({
  selector: 'placeCard',
  templateUrl: './placeCard.component.html',
  styleUrls: ['./placeCard.component.css']
})

export class PlaceCard {
  @Input() place;

  ngOnInit(){
    console.log(this.place);
  }

  hasWebsite(){
    console.log(this.place.WEB_LINK);
    if(this.place.properties.WEB_LINK == " "){
      return true;
    }else{
      return false;
    }
  }
}
