// Angular Packages
import { Component, Optional } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';

//Dialog Menus
import { LoginDialog, RegisterDialog} from './components';

//services
import { PointsOfInterestService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentlyViewing : any;
  constructor(private _dialog: MdDialog, private _snackbar: MdSnackBar, public poi: PointsOfInterestService) {}

  ngOnInit(){
    this.poi.getParks().subscribe(
      parks => {this.currentlyViewing = parks.features; console.log(parks)},
      error => {console.log(error)}
    )
  }

  openLogin() {
      let dialogRef = this._dialog.open(LoginDialog);
      dialogRef.afterClosed().subscribe(result => {
        console.log(result)
      })
    }

  openRegister() {
      let dialogRef = this._dialog.open(RegisterDialog);
      dialogRef.afterClosed().subscribe(result => {
        console.log(result)
      })
    }

    showSnackbar() {
      this._snackbar.open('vb Accepted!', 'See Who');
    }
}
