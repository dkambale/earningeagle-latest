import { Component, Inject } from '@angular/core';
import { Product } from '../beans/Product';


import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  products: any[] = [];
  selectedProduct: Product | undefined;
  selectedRow = -1;

  constructor(
    private dialogRef: MatDialogRef<PaymentComponent>, @Inject(MAT_DIALOG_DATA) data: any
  ) {
    
  }
  


  selectedproductsRow(index: number, product: Product) {


    console.log(product);
    this.selectedProduct = product;
    this.selectedRow = index;
  }
 
  close() {
    this.dialogRef.close( );
  }
  
}
