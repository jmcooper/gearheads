import { Routes } from '@angular/router';

import { ProductListingComponent } from './products/product-listing.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const appRoutes: Routes = [
  { path: 'products', component: ProductListingComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];