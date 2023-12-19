import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { SalesComponent } from './sales/sales.component';
import { CustomerComponent } from './customer/customer.component';
import { MoreComponent } from './more/more.component';
import { ProductsComponent } from './products/products.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './jwt.interceptor';
import { TaxRatesComponent } from './taxRates/taxRates.component';
import { PaymentComponent } from './payment/payment.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { SalesHistoryComponent } from './sales-history/sales-history.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'user', component: UserComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'product', component: ProductComponent },
      { path: 'sales', component: SalesComponent },
      { path: 'more', component: MoreComponent },
      { path: 'login', component: LoginComponent },
      { path: 'tax-rates', component: TaxRatesComponent},
      { path: 'payment', component: PaymentComponent},
       { path: 'calculator', component: CalculatorComponent},
      { path: 'customerlist', component: CustomerlistComponent},
      { path: 'salesHistory', component: SalesHistoryComponent}
    ]
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ]
})
export class AppRoutingModule { }

