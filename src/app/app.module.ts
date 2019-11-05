import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListingComponent } from './products/product-listing.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { appRoutes } from './routes';
import { ProductComponent } from './products/product.component';
import { CartService } from './checkout/cart.service';
import { CartComponent } from './checkout/cart.component';
import { BillingComponent } from './checkout/billing.component';
import { AddressComponent } from './checkout/address/address.component';
import { AddressDisplayComponent } from './checkout/address/address-display.component';
import { AddressEditComponent } from './checkout/address/address-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListingComponent,
    ProductComponent,
    CheckoutComponent,
    CartComponent,
    BillingComponent,
    AddressComponent,
    AddressDisplayComponent,
    AddressEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
