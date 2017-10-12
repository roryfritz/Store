import { iProduct } from './interfaces/iProduct';
import { DbService } from './services/db.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  baseURL = 'https://httpdb-5a1bc.firebaseio.com';
  rootNode = 'people';
  dataCollection: iProduct[];

  constructor(private dbService: DbService) {}



  retrieve() {
    this.dbService.getAllData(`${this.baseURL}/${this.rootNode}.json`)
    .subscribe(
      (response: iProduct[]) => {
        this.dataCollection = response;
        console.log(this.dataCollection);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
