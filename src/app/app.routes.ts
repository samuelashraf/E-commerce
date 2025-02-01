import { Routes } from '@angular/router';
import { AllProductsComponent } from './components/all.products/all.products.component';
import { ProducDetailsComponent } from './components/produc-details/produc-details.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';

export const routes: Routes = [
  { path: 'order', component: OrderComponent },
  { path: 'details/:id', component: ProducDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: 'order', pathMatch: 'full' },
];
