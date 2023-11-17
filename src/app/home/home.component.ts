import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nav: string = 'home';
  user: string;
  product: string;
  sales: string;
  more: string;
  buy: string;
  isProductNameClicked = false;
  isBarcodeClicked = false;
  isIdClicked = false;
  isCashClicked= true;
  searchText: string = ''; 

  constructor() {
    this.user = ''; 
    this.product = ''; 
    this.sales = ''; 
    this.more = '';
    this.buy = '';
    
  }

  searchByProductName() {
    this.isProductNameClicked = true;
    this.isBarcodeClicked = false;
    this.isIdClicked = false;
  }

  searchByBarcode() {
    this.isProductNameClicked = false;
    this.isBarcodeClicked = true;
    this.isIdClicked = false;
   
  }

  searchById() {
    this.isProductNameClicked = false;
    this.isBarcodeClicked = false;
    this.isIdClicked = true;
  
  }
  cash(){
this.isCashClicked=true;
  }
}
