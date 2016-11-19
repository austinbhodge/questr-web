import { Component, Optional } from '@angular/core';
import { MdDialog, MdDialogRef} from '@angular/material';

@Component({
  template: `
  <md-card>
     <md-card-title style="text-align:center;">Register</md-card-title>
     <img src="assets/imgs/login.png" height="150px" width="auto" style="float:center;">
     <md-card-content>
      <md-input placeholder="Username" maxlength="16" class="demo-full-width" value="" #username></md-input> <br>
      <md-input placeholder="Password" maxlength="16" class="demo-full-width" value="" #password></md-input> <br>
      <md-input placeholder="Confirm Password" maxlength="16" class="demo-full-width" value="" #confirmPassword></md-input>
     </md-card-content>
     <md-card-actions>
       <button md-raised-button color="accent" (click)="dialogRef.close('waa')">Close</button>
       <button md-raised-button color="primary" style="float:right;" (click)="dialogRef.close('Were in hehe')">Register</button>
     </md-card-actions>
  </md-card>
  `,
})
export class RegisterDialog {
  constructor(@Optional() public dialogRef: MdDialogRef<RegisterDialog>) { }
}
