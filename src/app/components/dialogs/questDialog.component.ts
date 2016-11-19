import { Component, Optional } from '@angular/core';
import { MdDialog, MdDialogRef} from '@angular/material';

@Component({
  template: `
  <md-card style="width:40vw; height:40vh;">
     <md-card-title style="text-align:center;">New Quest</md-card-title>
     <md-card-content>
      <md-input placeholder="Quest Title" maxlength="16" class="demo-full-width" style="width:20vw;" value="" #title></md-input> <br>
      <md-textarea placeholder="Describe your quest" maxlength="100" class="demo-full-width" style="width:40vw;" value="" #description></md-textarea>

     </md-card-content>
     <md-card-actions style="width:40vw;">
          <button md-raised-button color="accent"  (click)="dialogRef.close('waa')">Close</button>
          <button md-raised-button color="primary" (click)="dialogRef.close('Were in hehe')" style="float:right;">Create</button>
     </md-card-actions>
  </md-card>
  `,
})
export class QuestDialog {
  constructor(@Optional() public dialogRef: MdDialogRef<QuestDialog>) { }
}
