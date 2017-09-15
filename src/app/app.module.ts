import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiserviceService } from "./api.service";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserListComponent } from './userlist/userlist.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    HttpModule,
  RouterModule.forRoot([
    { path : 'userlist', component : UserListComponent },
    { path : 'add-user', component : AddUserComponent }
  ])
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
