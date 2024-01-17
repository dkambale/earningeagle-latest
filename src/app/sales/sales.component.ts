import { Component, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { Product } from '../beans/Product';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CalculatorComponent } from '../calculator/calculator.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerComponent } from '../customer/customer.component';
import { CustomerlistComponent } from '../customerlist/customerlist.component';
import { DialogRef } from '@angular/cdk/dialog';
import { PaymentComponent } from '../payment/payment.component';
import { RefundComponent } from '../refund/refund.component';
import { CommentComponent } from '../comment/comment.component';
import { OrderService } from '../services/order.service';
import { Order } from '../beans/order';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
  showCalculator: boolean = false;
  calculatorInput: string = '';

  searchValue = " ";

  selectedType = "name";
  showConfirmationDialog: boolean = false;
  products: any[] = [];
  Action: number = 0;
  selectedProduct: Product | undefined;
  selectedRow = -1;
  isDeleteModalVisible: boolean = false;
  totalBefore: number = 0;
  totalTax: number = 0;
  totalDiscount: number = 0;
  totalQuantity: number = 0;
  selectedcustomer = undefined;
  finalTotal: number = 0;
  final: number = 0;
  tax: number = 0;
  dialogConfig = new MatDialogConfig();


  constructor(private productService: ProductServiceService,
    private dialog: MatDialog, private router: Router,
    private orderService: OrderService, private el: ElementRef) {

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

  lock() {


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

  // openCalculator1(): void {
  //   const dialogRef = this.dialog.open(CalculatorComponent, {
  //     width: '400px',
  //     disableClose: true,
  //   });


  //   dialogRef.afterClosed().subscribe(result => {

  //     console.log('Dialog closed with result:', result);
  //   });
  // }


  openCalculator(): void {
    const dialogRef = this.dialog.open(CalculatorComponent, {
      width: '400px',
      disableClose: true,
    });


    dialogRef.afterClosed().subscribe(result => {

      console.log('Dialog closed with result:', result);
      this.totalDiscount = Number.parseInt(result);
      
    });
  }


  openCustomer(): void {
    const dialogRef = this.dialog.open(CustomerlistComponent, {
      width: '900px',
      height: '400px',
      disableClose: true,
      
      
    });

    dialogRef.afterClosed().subscribe(customer => {

      console.log('Selected Customer:', customer);
      this.selectedcustomer = customer;
     
    });
  }



  openRefund(): void {
    const dialogRef = this.dialog.open(RefundComponent, {
      width: '150%',
      height: '100%',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(customer => {

      console.log('Selected Customer:', customer);
      this.selectedcustomer = customer;
    });
  }

  openComment(): void {
    const dialogRef = this.dialog.open(CommentComponent, {
      width: '150%',
      height: '93%',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(customer => {

      console.log('Selected Customer:', customer);
      this.selectedcustomer = customer;
    });
  }


  openPayment(): void {
    let order = {
      orderID: null,
      // orderType: 0,
      orderItems: this.products,
      name: this.selectedcustomer?.['userName'],
      customerName: this.selectedcustomer?.['name'],
      itemID:0,
      totalQuantity: this.selectedProduct?.['quantity'],
      //ItemName: this.selectedProduct?.['name'],
      Price: this.selectedProduct?.['buyPrice'],
      gTotal: this.totalBefore,
      Tax: this.totalTax,
      totalDiscount: this.totalDiscount,
      buyPrice: this.selectedProduct?.['buyPrice'],
      perDiscount: 0,
      govtGST: this.selectedProduct?.['govtGST'],
      balanceAmount :this.balanceAmount,
      amountPaid:this.amountPaid,
      "isActive":1,
      "orderType":1,

    }
    this.orderService.saveOrder(order).subscribe(res => {
      console.log(res);
    })
      ;
    this.selectedType = "Payment"
    const dialogRef = this.dialog.open(PaymentComponent, {

      height: '451px',
      disableClose: true,
    });


    dialogRef.afterClosed().subscribe(result => {

      console.log('Dialog closed with result:', result);
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
              let totalTax=p["govtGST"]+p["stateGST"];
              const productPayload = {
                "itemID": p['id'],
                "itemName": p["name"],
                "quantity": 1,
                "price": p["sellPrice"],
                "total": p["sellPrice"],
                "subTotal": p["subTotal"],
                "govtGST": p["govtGST"],
                "stateGST": p["stateGST"],
                "pertax": totalTax,
                "tax":0,
                "isActive":1,
                "orderType":1,
                "isisTaxIncluded": p["isTaxIncluded"],
               " customerName":p["customerName"]
              }


              this.products.push(productPayload);
            }
          });
        }
        this.finalBill();
      }    
    )
  }
  getTotal(p: any, tax: number) {

    let total = 0;
    if (p.isTaxIncluded) {

      total = p.price * p.quantity;
    } else {
      total = (p.price + tax) * p.quantity;
    }
    return total;
  }
  getTaxForItem(p: any) {
    let tax = 0;
    if (!p.isTaxIncluded) {
      tax = (p.price * (p.pertax) / 100);
    } else {

      tax = p.price - (p.price * (100 - p.pertax) / 100);
    }
    return Number.parseInt(""+tax);
  }

  finalBill() {

    this.clearBill();
    this.products.forEach(product => {
      //indivisual product update
      let tax = this.getTaxForItem(product);
      product["tax"] = tax * product.quantity;
      product["total"] = this.getTotal(product, tax);

      this.totalBefore = this.totalBefore + product.total;
      this.totalTax = this.totalTax + product["tax"];
      this.totalDiscount = this.totalDiscount;
      this.final = this.totalBefore - this.totalDiscount;

      // this.final=this.finalTotal - this.totalDiscount;
      this.calculateTotalQuantity();
    })
  }



  clearBill() {
    this.totalBefore = 0
    this.totalTax = 0
    this.totalDiscount=0;
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




  decrementQuantity(product: any): void {
    if (product.quantity > 1) {
      product.quantity--;
      this.updateTotal(product);
    }
  }

  incrementQuantity(product: any): void {
    product.quantity++;
    this.updateTotal(product);
  }

  updateTotal(product: any): void {
    product.total = product.quantity * product.sellPrice;
    this.finalBill()
  }

  public deleteRow(index: number): void {
    if (index >= 0 && index < this.products.length) {
      this.products.splice(index, 1);
      this.selectedRow = -1;
      this.finalBill()
    }
  }


  toggleFullScreen() {
    const elem: any = this.el.nativeElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  }
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'F' || event.key === 'f') {
      this.toggleFullScreen();
    }
  }

  calculateTotalQuantity(): void {
    this.totalQuantity = 0;
  
    for (const product of this.products) {
      this.totalQuantity += product.quantity;
    }
  }
  


  amountPaid: number = 0;
balanceAmount : number =0;

  onPaidAmountChange(event: any): void {
    const inputValue = event?.target?.value;
  
    if (inputValue !== null && inputValue !== undefined) {
      this.amountPaid = Number(inputValue);
      this.calculatebalanceAmountingAmount();
    }
  }

  calculatebalanceAmountingAmount(): void {
    this.balanceAmount = this.final - this.totalDiscount - this.amountPaid;
    
  }

// gTotal: number=0;

//   grandTotal(){
//   this.gTotal = this.final-this.totalDiscount;
//   }
} 