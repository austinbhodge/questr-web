import { Component, Input } from '@angular/core';


@Component({
  selector: 'vb-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class Sidebar {
  @Input() places;

}
