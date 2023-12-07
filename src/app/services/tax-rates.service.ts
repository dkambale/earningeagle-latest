import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaxRatesComponent } from '../taxRates/taxRates.component';
import { taxRates } from '../beans/taxRates';

@Injectable({
  providedIn: 'root'
})
export class TaxRatesService {

  environment = {
    "apiURL": "http://localhost:9090"
};;

private serverUrl = `${this.environment.apiURL}/taxRates`;

private serverBaseUrl = this.environment.apiURL;

private serverUrlForCompay = `${this.environment.apiURL}/company`

constructor(private http: HttpClient) {
}
getAll(searchText: string) {
  let url=`${this.environment.apiURL}/taxRates/getall${searchText}`;
        console.log(url);
        return this.http.get<any>(url);
}

getAllTaxes() {
  let url=`${this.environment.apiURL}/taxRates/getall`;
        console.log(url);
        return this.http.get<any>(url);
}

register(prodcut: taxRates) {
  console.log("calling service")
  return this.http.post<any>(this.serverUrl, prodcut);
}


delete(id: number) {
  return this.http.delete(this.serverBaseUrl + '/delete/' + id);
}

}
