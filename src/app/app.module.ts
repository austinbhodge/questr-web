// Angular Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Angular Packages
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MaterialModule, MdIconRegistry } from '@angular/material';

// Application Imports
import { AppComponent } from './app.component';
import { LoginDialog,
         RegisterDialog,
         QuestDialog,
         Sidebar,
         QuestCard,
         QuestMap} from './components';

@NgModule({
  entryComponents: [LoginDialog, RegisterDialog, QuestDialog],
  declarations: [
    AppComponent,
    LoginDialog,
    RegisterDialog,
    QuestDialog,
    Sidebar,
    QuestCard,
    QuestMap
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA4mHrBeXSqT1WD6zzGH7KyxzotlQfWt0k'
    }),
    MaterialModule.forRoot()
  ],
  providers: [MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule {}
