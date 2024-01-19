import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../beans/order';

@Component({
  selector: 'app-sales-history',
  templateUrl: './sales-history.component.html',
  styleUrls: ['./sales-history.component.css']
})
export class SalesHistoryComponent implements OnInit {
  orderList: Order[] = [];
  selectedOrder: Order | undefined;
  selectedRow = -1;

  searchValue = " ";

  constructor(private orderService: OrderService) { }





  ngOnInit(): void {
    this.loadOrderList();
  }

  loadOrderList(): void {
    const orderType = 1;
    this.orderService.getOrderList(orderType).subscribe(orders => {
      this.orderList = orders;
      console.log(orders);
    }
    );
  }


  selectedordersRow(index: number, order: Order) {

    // alert("Selected Product:" + index);
    console.log(order);
    this.selectedOrder = order;
    this.selectedRow = index;
  }


  printOrder() {
    if (this.selectedRow !== undefined && this.selectedRow !== null && this.selectedOrder) {
      const printWindow = window.open('', 'Earning Eagle')!; 
  
      const printContent = `
      <div style="background-color: black; color: white;widt:500px">
      <h style="float:right;"> Earning Eagle</h>
        <h2 >Order Details</h2>
        <p><strong>Customer Name:</strong> ${this.selectedOrder.customerName}</p>
        
  
        <h3>Document Items</h3>
        <h3>Balance Amount :  ${this.selectedOrder.balanceAmount}</h3>
        
  
        <p>Printed on: ${new Date().toLocaleString()}</p>
        </div>
      `;
  
      printWindow.document.write(printContent);
  
      printWindow.document.close();
  
      printWindow.print();
    } else {
      console.log('No order selected for printing.');
    }
  }
   
}