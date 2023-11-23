import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { Product } from '../beans/Product';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  searchValue = " ";

  selectedType="";

  constructor(private productService: ProductServiceService) {

  }
  ngOnInit(): void {
  }

  byBarcode() {
    this.selectedType="barcode"
    console.log("search text:", this.searchValue);
  }

  byALlSearch() {
    this.selectedType="all";
    console.log("search text:", this.searchValue);
  }

  byname(){
    this.selectedType="name";
    console.log("search text:", this.searchValue);
  }
  byid(){
    this.selectedType="id";
    console.log("search text:", this.searchValue);
  }

  onsubmit(){
    this.productService.getAllProductWihSearch(this.searchValue).subscribe(
      res=>{
        console.log(res.content); 
      }
    )
    //http://localhost:9090/productsearch?search=
  }

}
