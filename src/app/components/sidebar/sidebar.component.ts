import { Component } from '@angular/core';


@Component({
  selector: 'questr-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class Sidebar {
  quests = [{
    name: 'Speed Racers',
    creator: 'Austin Hodge',
    lat : 36.826,
    lng : -76.164,
    description : 'You must beat me in a 1km race around my neigborhood. Gear up and get ready to break a sweat.',
    icon : 'speed.png',
    stat : "Dexterity",
    color : "#7ddbff",
    rewards : [{img : "speed.png", name: "Dexterity", amount : "50XP"},{img : "cookie.png", name: "Cookies", amount : "6 Chocolate Chip"}]
  },
  {
    name: 'WAWA',
    creator: 'Austin Hodge',
    lat : 36.826,
    lng : -76.164,
    description : 'You must beat me in a 1km race around my neigborhood. Gear up and get ready to break a sweat.',
    icon : 'speed.png',
    stat : "Dexterity",
    color : "#7AAAff",
    rewards : [{img : "speed.png", name: "Dexterity", amount : "50XP"}]
  }]
}
