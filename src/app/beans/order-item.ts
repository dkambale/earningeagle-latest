export class OrderItem {
    OrderItemID: number;
    OrderID: number;
    ItemID: number;
    Quantity: number;
    ItemName:string;
    Price:number;
    Total:number;
    Tax:number;
    Discount:number;
    buyPrice:number;
    perDiscount:number;
    gst:number;

    constructor(){
        this.OrderItemID=0,
        this.OrderID=0,
        this.ItemID=0,
        this.Quantity=0,
        this.ItemName="",
        this.Price=0,
        this.Total=0,
        this.Tax=0,
        this.Discount=0,
        this.buyPrice=0,
        this.perDiscount=0,
        this.gst=0
    }
}
