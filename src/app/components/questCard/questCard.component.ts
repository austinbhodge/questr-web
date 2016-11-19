import { Component, Input } from '@angular/core';


@Component({
  selector: 'questCard',
  templateUrl: './questCard.component.html',
  styleUrls: ['./questCard.component.css']
})

export class QuestCard {
  title : string;
  description : string;
  creator : string;
  reward: string;
  stat: string;
  @Input() quest;

}
