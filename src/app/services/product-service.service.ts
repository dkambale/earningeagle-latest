import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../beans/Product';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Company } from '../beans/Company';

@Injectable({
    providedIn: 'root'
})
export class ProductServiceService {

    environment = {
        "apiURL": "http://localhost:9090"
    };;

    private serverUrl = `${this.environment.apiURL}/product`;

    private serverBaseUrl = this.environment.apiURL;

    private serverUrlForCompay = `${this.environment.apiURL}/company`

    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get<Product[]>(this.serverUrl);
    }

    getAllProduct() {
        return this.http.get<Product[]>(this.serverUrl).toPromise();
    }

    getAllProductWihSearch(searchText: string) {
        console.log(searchText.length);
        let url=`${this.environment.apiURL}/productsearch?search=${searchText.trim()}`;
        console.log(url);
        return this.http.get<any>(url);
    }

    getAllProductWihImei(searchText: string) {
        let url=`${this.environment.apiURL}/productsearch/imei?search=${searchText}`;
        console.log(url);
        return this.http.get<any>(url);
    }

    getById(id: number) {
        return this.http.get<Product>(this.serverUrl + "/" + id);
    }

    register(prodcut: Product) {
        console.log("calling service")
        return this.http.post<any>(this.serverUrl, prodcut);
    }

    update(product: Product) {
        return this.http.put(this.serverUrl + product.id, product);
    }

    delete(id: number) {
        return this.http.delete(this.serverBaseUrl + '/deleteproduct/' + id);
    }
    getAllCompanies() {
        return this.http.get<Company[]>(this.serverUrlForCompay);
    }

}
