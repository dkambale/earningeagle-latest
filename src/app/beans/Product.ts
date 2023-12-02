import { Company } from "./Company";

export class Product {

    public id: number;
    public name: string;
    public quantity: number;
    public buyPrice: number;
    public sellPrice: number;
    public uniqueNumber: String;
    public expiredate: number;
    public stateGST:number;
    public govtGST:number;
    public unitId:number;
    public stockAlert:boolean;
    public description:string;
    public vendorId:number;
    public gstUnit:number;
    constructor() { 
        this.id=0,
        this.name="",
        this.quantity=0,
        this.buyPrice=0,
        this.sellPrice=0,
        this.uniqueNumber="",
        this.expiredate=0,
        this.stateGST=0,
        this.govtGST=0,
        this.unitId=0,
        this.stockAlert=false,
        this.description="",
        this.vendorId=0,
        this.gstUnit=0
    }

}