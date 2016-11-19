// Angular Packages
import { Component, Optional } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';

//Dialog Menus
import { LoginDialog, RegisterDialog, QuestDialog} from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _dialog: MdDialog, private _snackbar: MdSnackBar) {}

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

  openNewQuest() {
      let dialogRef = this._dialog.open(QuestDialog);
      dialogRef.afterClosed().subscribe(result => {
        console.log(result)
      })
    }

    showSnackbar() {
      this._snackbar.open('Quest Accepted!', 'See Who');
    }
}
