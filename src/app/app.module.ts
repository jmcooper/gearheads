import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListingComponent } from './products/product-listing.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { appRoutes } from './routes';
import { ProductComponent } from './products/product.component';
import { CartService } from './checkout/cart.service';
import { CartComponent } from './checkout/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListingComponent,
    ProductComponent,
    CheckoutComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
