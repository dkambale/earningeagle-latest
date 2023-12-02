import { Address } from "./Address";


export class Company {
    companyId: number;
    registrationNumber: String;
    companyName: String;
    address: Address;

   public constructor(){                                             
        this.companyId=0,
        this.registrationNumber="",
        this.companyName="0",
        this.address=new Address();
    
    }

  public  setCompanyName(name:String)
    {
        this.companyName=name;
    }
    setCompanyId(id:number)
    {
        this.companyId=id;
    }
    setAddress(address:Address)
    {
        this.address=address;
    }
}