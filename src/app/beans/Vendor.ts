export class Vendor {
    id: number;
    name: string;
    contactNumber: number
    emailId: number
    address: string
    isActive:number
    dateOfBirth:Date
    type:string
    panCardNumber:string
    bankAccountNumber:string
    bankAccountName:string
    ifscCode:string
    constructor(){
        this.id=0,
        this.name="",
        this.contactNumber=0,
        this.emailId=0,
        this.address="",
        this.isActive=0,
        this.dateOfBirth=new Date(),
        this.type="",
        this.panCardNumber="",
        this.bankAccountNumber="",
        this.bankAccountName="",
        this.ifscCode=""
    }
}
