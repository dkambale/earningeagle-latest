import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';

import { SalesComponent } from './sales/sales.component';
import { CustomerComponent } from './customer/customer.component';
import { MoreComponent } from './more/more.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { TaxRatesComponent } from './taxRates/taxRates.component';
import { PaymentComponent } from './payment/payment.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProductComponent } from './product/product.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { SalesHistoryComponent } from './sales-history/sales-history.component';
import { RefundComponent } from './refund/refund.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    ProductComponent,
    SalesComponent,
    CustomerComponent,
    MoreComponent,
    ProductsComponent,
    TaxRatesComponent,
    PaymentComponent,
    CalculatorComponent,
    CustomerlistComponent,
    SalesHistoryComponent,
    RefundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    FormsModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
