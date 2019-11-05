import { Component } from '@angular/core';

import { CartService } from './cart.service';
import { UserAccount } from './user-account';

@Component({
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cart: any;
  userAccount:UserAccount = new UserAccount();

  constructor(private cartService: CartService) {
    this.cart = cartService.getCart();
  }

  updateAddress(addressInfo) {
    if (addressInfo.addressType === 'shipping') 
      this.userAccount.shippingAddress = addressInfo.address;
    else
      this.userAccount.billingAddress = addressInfo.address;
  }

}
