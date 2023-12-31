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

     constructor(){
        this.orderID=0,
        this.orderNo=" ",
        this.customerID=0,
        this.customerName="",
        this.pMethod="",
        this.gTotal=0,
        this.deletedOrderItemIDs="",
        this.orderItems=[],
        this.isActive=0,
        this.orderType=0,
        this.orderDate=new Date(),
        this.amountPaid=0,
        this.totalTax=0,
        this.totalDiscount=0,
        this.balanceAmount=0,
        this.extraCharge=0,
        this.vendor= new Vendor(),
        this.customer= new Customer(),
        this.perDiscount=0,
        this.totalMRP=0,
        this.totalQuantity=0

     }
}
