import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { Product } from '../beans/Product';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CalculatorComponent } from '../calculator/calculator.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerComponent } from '../customer/customer.component';
import { CustomerlistComponent } from '../customerlist/customerlist.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit{
  showCalculator: boolean = false;
  calculatorInput: string = '';

  searchValue = " ";

  selectedType = "name";
  showConfirmationDialog: boolean = false;
  products: any[] = [];
  selectedProduct: Product | undefined;
  selectedRow = -1;
  isDeleteModalVisible: boolean = false;
  totalBefore: number = 0;
  totalTax: number = 0;
  totalDiscount: number = 0;
  selectedcustomer=undefined;
  finalTotal: number = 0;
  dialogConfig = new MatDialogConfig();


  constructor(private productService: ProductServiceService,
     private dialog: MatDialog , private router: Router) {

  }

  ngOnInit(): void {
  }

  

  openDeleteConfirmationModal() {
    this.isDeleteModalVisible = true;
  }

  closeDeleteConfirmationModal() {
    this.isDeleteModalVisible = false;
  }

  Delete() {
    if (this.selectedProduct != undefined) {
      this.productService.delete(this.selectedProduct.id).subscribe(res => {
        // alert("Product Deleted Successfully")
        this.closeDeleteConfirmationModal();
        this.getAllProducts();
      })
    }
  }
  getAllProducts() {
    this.productService.getAllProductWihSearch(this.searchValue).subscribe(
      res => {
        this.products = res.content;
      }
    )

  }

  selectedproductsRow(index: number, product: Product) {

    // alert("Selected Product:" + index);
    console.log(product);
    this.selectedProduct = product;
    this.selectedRow = index;
  }

  openCalculator1(): void {
    const dialogRef = this.dialog.open(CalculatorComponent, {
      width: '400px',
      disableClose: true,
    });


    dialogRef.afterClosed().subscribe(result => {

      console.log('Dialog closed with result:', result);
    });
  }

  
  openCalculator(): void {
    const dialogRef = this.dialog.open(CalculatorComponent, {
      width: '400px',
      disableClose: true,
    });


    dialogRef.afterClosed().subscribe(result => {

      console.log('Dialog closed with result:', result);
      this.totalDiscount=result;
    });
  }
  openCustomer(): void {
    const dialogRef = this.dialog.open(CustomerlistComponent, {
      width: '900px',
      height:'400px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(customer => {

      console.log('Selected Customer:', customer);
      this.selectedcustomer=customer;
    });
  }
 


  deleteItem(id: number) {
    alert("delete item with id");
    this.products = this.products.splice(id, 1);
  }

  byBarcode() {
    this.selectedType = "barcode"
    console.log("search text:", this.searchValue);
  }

  byALlSearch() {
    this.selectedType = "all";
    console.log("search text:", this.searchValue);
  }

  byname() {
    this.selectedType = "name";
    console.log("search text:", this.searchValue);
  }
  byid() {
    this.selectedType = "id";
    console.log("search text:", this.searchValue);
  }

  navigateToProducts(): void {
    this.router.navigate(['/home/products']);
  }



  onsubmit() {
    this.productService.getAllProductWihSearch(this.searchValue).subscribe(
      res => {
        console.log(res.content);
        if (res.content.length > 0) {

          res.content.forEach((p: any) => {

            const existingProduct = this.products.find(product => product.name === p.name);

            if (existingProduct) {

              existingProduct.quantity++;
              existingProduct.total = existingProduct.quantity * existingProduct.sellPrice;

            }
            else {

              const productPayload = {
               "id":p['id'],
                "name": p["name"],
                "quantity": 1,
                "sellPrice": p["sellPrice"],
                "total": p["sellPrice"],
                "subTotal": p["subTotal  "]
              }

              this.products.push(productPayload);
            }
          });
        }
        this.finalBill();
      }
    )
  }

  finalBill() {

    this.clearBill();
    this.products.forEach(product => {

      this.totalBefore = this.totalBefore + product.total
      this.totalTax = this.totalTax + 0;
      this.totalDiscount = 0
      this.finalTotal = this.totalBefore + this.totalTax - this.totalDiscount;
    })
  }
  clearBill() {
    this.totalBefore = 0
      this.totalTax = 0
      this.totalDiscount = 0
      this.finalTotal = 0
  }

  showDeleteConfirmation() {
    const userConfirmed = confirm('Are you sure you want to delete?');

    if (userConfirmed) {
      this.refreshComponent();
    }
  }

  
  refreshComponent() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }


}