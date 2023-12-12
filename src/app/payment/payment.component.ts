import { Component } from '@angular/core';
import { Product } from '../beans/Product';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  products: any[] = [];
  selectedProduct: Product | undefined;
  selectedRow = -1;




  selectedproductsRow(index: number, product: Product) {


    console.log(product);
    this.selectedProduct = product;
    this.selectedRow = index;
  }
 

  
}
