import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cart: any;

  constructor(private cartService: CartService) {
    this.cart = cartService.getCart();
  }

}
