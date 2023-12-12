import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Customer } from '../beans/customer';
import { Company } from '../beans/Company';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  
  environment = {
    "apiURL": "http://localhost:9090"
};;

private serverUrl = `${this.environment.apiURL}/customer`;

private serverBaseUrl = this.environment.apiURL;

private serverUrlForCompay = `${this.environment.apiURL}/company`

constructor(private http: HttpClient) {
}

getAll() {
    return this.http.get<Customer[]>(this.serverUrl);
}

getAllcustomer() {
    return this.http.get<Customer[]>(this.serverUrl).toPromise();
}

getAllcustomerWihSearch(searchText: string) {
    console.log(searchText.length);
    let url=`${this.environment.apiURL}/customersearch?search=${searchText.trim()}`;
    console.log(url);
    return this.http.get<any>(url);
}

getAllcustomerWihImei(searchText: string) {
    let url=`${this.environment.apiURL}/customersearch/imei?search=${searchText}`;
    console.log(url);
    return this.http.get<any>(url);
}

getById(id: number) {
    return this.http.get<Customer>(this.serverUrl + "/" + id);
}

register(customer: Customer) {
    console.log("calling service")
    return this.http.post<any>(this.serverUrl, customer);
}

update(customer: Customer) {
    return this.http.put<any>(this.serverUrl + customer.id, customer);
}

delete(id: number) {
    return this.http.delete(this.serverBaseUrl + 'deletecustomer/' + id);
}
getAllCompanies() {
    return this.http.get<Company[]>(this.serverUrlForCompay);
}
}
