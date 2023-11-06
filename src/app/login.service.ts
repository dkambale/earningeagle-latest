import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = "http://localhost:9090/";
  constructor(private httpClient: HttpClient) { }

  public login(username: string, password: string) {
    let url = `${this.baseUrl}/login?userName=${username}&&password=${password}`
    console.log(url);
    return this.httpClient.get(url);
  }
}
