import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { SalesComponent } from './sales/sales.component';
import { CustomerComponent } from './customer/customer.component';
import { MoreComponent } from './more/more.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:'login', component:LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'product', component: ProductComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'more', component: MoreComponent },
];

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

