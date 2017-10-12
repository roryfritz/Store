import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DbService } from './services/db.service';
import { PagerService } from './services/pager.service';
import { AppComponent } from './app.component';
import { AddpersonComponent } from './addperson/addperson.component';
import { ListingComponent } from './listing/listing.component';

const routeOptions: Routes = [
  {path: 'insert', component: AddpersonComponent},
  {path: 'list', component: ListingComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddpersonComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routeOptions)
  ],
  providers: [DbService, PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
