import { Component } from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent {
  nav: string = 'more';
  user: string;
  product: string;
  sales: String;
  constructor() {
    this.user = ''; 
    this.product = ''; 
    this.sales = ''; 
  }
}
