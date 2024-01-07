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
}