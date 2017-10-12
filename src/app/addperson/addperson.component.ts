import { Component, OnInit } from '@angular/core';
import { DbService} from '../services/db.service';
import { iProduct } from '../interfaces/iProduct';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addperson',
  templateUrl: './addperson.component.html',
  styleUrls: ['./addperson.component.css']
})
export class AddpersonComponent implements OnInit {
  baseURL = 'https://store-62681.firebaseio.com/';
  rootNode = 'people';
  dataCollection: iProduct[];

  constructor(private dbService: DbService) { }

  ngOnInit() {
  }

  addNameEntry(dataForm: NgForm) {
    const product = {
      productID: dataForm.value.prodID,
      productName: dataForm.value.prodName,
      productPicture: dataForm.value.prodPic,
      productPrice: dataForm.value.prodPrice
    }
    this.dbService.saveData(`${this.baseURL}/${this.rootNode}.json`, product)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

}
