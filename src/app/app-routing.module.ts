import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProdetailsComponent } from './components/prodetails/prodetails.component';
import { ProductComponent } from './components/product/product.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path:'cart', component: CartComponent
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path:'userdata',component: UserinfoComponent
  },
  {
    path: 'pro-details', component: ProdetailsComponent
  },
  {
    path: 'product/:id', component: ProductComponent
  },
  {
    path:'checkout', component: CheckoutComponent
  },
  {
    path: 'thanks', component: ThanksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
