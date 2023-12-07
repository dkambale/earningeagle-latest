import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { Product } from '../beans/Product';
import { MatDialog } from '@angular/material/dialog';
import { CalculatorComponent } from '../calculator/calculator.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
  showCalculator: boolean = false;
  calculatorInput: string = '';

  searchValue = " ";

  selectedType="name";

  products:any[]=[];
  selectedProduct: Product | undefined;
  selectedRow = -1;

  constructor(private productService: ProductServiceService,private dialog: MatDialog,private router: Router)   {

  }
  ngOnInit(): void {
  }

  selectedproductsRow(index: number, product: Product) {

    // alert("Selected Product:" + index);
    console.log(product);
    this.selectedProduct = product;
    this.selectedRow = index;
  }

  openCalculator(): void {
    const dialogRef = this.dialog.open(CalculatorComponent, {
      width: '400px', 
      disableClose: true, 
    });
  
    
    dialogRef.afterClosed().subscribe(result => {

      console.log('Dialog closed with result:', result);
    });
  }

  deleteItem(id:number) {
    alert("delete item with id");
    this.products=this.products.splice(id, 1);
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

  navigateToProducts(): void {
    this.router.navigate(['/home/products']);
  }

  onsubmit(){
    this.productService.getAllProductWihSearch(this.searchValue).subscribe(
      res=>{
        console.log(res.content); 
        if(res.content.length>0) {

          res.content.map((p: any)=> {

             let productPayload= {
                "name":p["name"],
                "quantity":1,
                "price":p["price"],
                "total":p["price"]
              }

              this.products.push(productPayload);
          });
        }
      }
    )
    //http://localhost:9090/productsearch?search=
  }

}
