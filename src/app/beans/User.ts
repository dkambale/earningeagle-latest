import { Address } from "./Address";

export class User {
    public id:number;
    public userName: String;
    public password: String;
    public firstName: String;
    public lastName: String;
    public userType: number;
    public mobileNumber: String;
    public dateOfBirth: Date;
    public createdAt: Date;
    public address: Address;
}