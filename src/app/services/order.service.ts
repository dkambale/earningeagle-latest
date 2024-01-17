import { Injectable } from '@angular/core';
import { Order } from '../beans/order';
import { OrderItem } from '../beans/order-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  environment = {
    "apiURL": "http://localhost:9090"
  };;

  private serverUrl = `${this.environment.apiURL}/order`;

  private serverBaseUrl = this.environment.apiURL;

  private serverUrlForCompay = `${this.environment.apiURL}/company`

  constructor(private http: HttpClient) {
  }

  formData: Order = new Order();
  orderItems: OrderItem[] = [];

  saveOrUpdateOrder() {
    var body = {
      ...this.formData,
      OrderItems: this.orderItems
    };
    return this.http.post(this.environment.apiURL + '/Order', body);
  }
  saveOrder(order:any) {
    return this.http.post(this.environment.apiURL + '/Order', order);
  }

  saveOrUpdateOrderNew() {
    console.log("Method is called####");
    this.formData.orderItems = this.orderItems;
    return this.http.post(this.environment.apiURL + '/Order', this.formData);
  }

  getOrderList(type: number) {
    let url =this.environment.apiURL + '/order/list/' + type;
    console.log(url);
    return this.http.get<any>(url);
  }                  

  getOrderByID(id: number) {
    return this.http.get<Order>(this.environment.apiURL + '/Order/' + id);
  }

  deleteOrder(id: number) {
    return this.http.delete(this.environment.apiURL + 'Order/' + id);
  }

  getItemListByOrderID(orderId: number) {
    return this.http.get<OrderItem[]>(this.environment.apiURL + '/TodaysOrderList/' + orderId);
  }

  getOrderMapForCustomerId(customerId: number) {
    return this.http.get<any>(this.environment.apiURL + '/ordersForCustomerId/' + customerId);
  }
  getOrderMapForVendorId(vendorId: number) {
    return this.http.get<any>(this.environment.apiURL + '/ordersForVendorId/' + vendorId);
  }
}
