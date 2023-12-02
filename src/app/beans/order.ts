import { OrderItem } from "./order-item";
import { Vendor } from "./Vendor";
import { Customer } from "./customer";

export class Order {
    orderID: number;
    orderNo: string;
    customerID: number;
    customerName: string;
    pMethod: string;
    gTotal: number;
    deletedOrderItemIDs: string;
    orderItems:OrderItem[];
    isActive:number;
    orderType:number;
    orderDate:Date;
    amountPaid:number;
    totalTax:number;
    totalDiscount:number;
    balanceAmount:number;
    extraCharge:number;
    vendor:Vendor;
    customer:Customer;
     perDiscount:number;
	 totalMRP:number;
	 totalQuantity:number;
}
